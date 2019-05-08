workflow "Dockerize" {
  resolves = [
    "Tag Proxy",
    "Tag YouTube Service",
    "Push woz-youtube-service",
    "Push woz-proxy",
    "Push woz-frontend",
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
  args = "woz-proxy worldofzero.azurecr.io/woz-proxy"
}

action "Tag YouTube Service" {
  uses = "actions/docker/tag@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["Dockerize World of Zero Server"]
  args = "woz-youtube-service worldofzero.azurecr.io/woz-youtube-service"
}

action "Azure Login" {
  uses = "Azure/github-actions/login@master"
  needs = ["Tag Frontend", "Tag Proxy", "Tag YouTube Service"]
  secrets = ["AZURE_SERVICE_APP_ID", "AZURE_SERVICE_PASSWORD", "AZURE_SERVICE_TENANT"]
}

action "GitHub Action for Azure" {
  uses = "Azure/github-actions/cli@843845a95833e81c790d80c6e2fa714ccbd5e145"
  needs = ["Azure Login"]
  env = {
    AZURE_SCRIPT = "az acr login --name WorldOfZero"
  }
}

action "Push woz-frontend" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["GitHub Action for Azure"]
  args = "push worldofzero.azurecr.io/woz-frontend:latest"
}

action "Push woz-proxy" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["GitHub Action for Azure"]
  args = "push worldofzero.azurecr.io/woz-proxy:latest"
}

action "Push woz-youtube-service" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["GitHub Action for Azure"]
  args = "push worldofzero.azurecr.io/woz-youtube-service:latest"
}
