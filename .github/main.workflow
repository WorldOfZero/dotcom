workflow "Build World of Zero Frontend" {
  on = "push"
  resolves = ["Docker Tag"]
}

action "Install Frontend Dependencies" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  runs = "npm"
  args = "install ./frontend"
}

action "Build Frontend" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["Install Frontend Dependencies"]
  args = "build ./frontend"
}

action "Dockerize World of Zero Frontend" {
  uses = "actions/docker/cli@c08a5fc9e0286844156fefff2c141072048141f6"
  runs = "docker"
  args = "build frontend -t woz-frontend"
  needs = ["Build Frontend"]
}

action "Docker Tag" {
  uses = "actions/docker/tag@c08a5fc9e0286844156fefff2c141072048141f6"
  needs = ["Dockerize World of Zero Frontend"]
  args = "frontend woz-frontend"
}
