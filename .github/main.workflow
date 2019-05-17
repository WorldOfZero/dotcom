workflow "Dockerize" {
  resolves = [
    "Tag Proxy",
    "Tag YouTube Service",
    "Azure Frontend",
    "Azure Youtube Service",
    "Azure Proxy",
  ]
  on = "push"
}

action "Install Frontend Dependencies" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  runs = "npm"
  args = "install ./frontend"
}

action "Dockerize World of Zero Frontend" {
  uses = "actions/docker/cli@c08a5fc9e0286844156fefff2c141072048141f6"
  args = "build -t woz-frontend frontend"
}

action "Tag Frontend" {
  uses = "actions/docker/tag@c08a5fc9e0286844156fefff2c141072048141f6"
  needs = ["Dockerize World of Zero Frontend"]
  args = "woz-frontend worldofzero.azurecr.io/woz-frontend"
}

action "Dockerize World of Zero Server" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  args = "build -t woz-youtube-service backend/youtube-service"
}

action "Dockerize World of Zero Proxy" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  args = "build -t woz-proxy backend/proxy"
}

action "Tag Proxy" {
  uses = "actions/docker/tag@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["Dockerize World of Zero Proxy"]
  args = ["woz-proxy", "worldofzero.azurecr.io/woz-proxy"]
}

action "Tag YouTube Service" {
  uses = "actions/docker/tag@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["Dockerize World of Zero Server"]
  args = ["woz-youtube-service", "worldofzero.azurecr.io/woz-youtube-service"]
}

action "Docker Login" {
  uses = "actions/docker/login@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["Tag Frontend", "Tag Proxy", "Tag YouTube Service"]
  secrets = ["DOCKER_REGISTRY_URL", "DOCKER_USERNAME", "DOCKER_PASSWORD"]
}

action "Azure Youtube Service" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["Docker Login"]
  args = ["push", "worldofzero.azurecr.io/woz-youtube-service"]
}

action "Azure Frontend" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["Docker Login"]
  args = ["push", "worldofzero.azurecr.io/woz-frontend"]
}

action "Azure Proxy" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["Docker Login"]
  args = ["push", "worldofzero.azurecr.io/woz-proxy"]
}
