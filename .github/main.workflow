workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "Install Frontend Dependencies" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  runs = "npm"
  args = "install ./frontend"
}

action "GitHub Action for npm" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["Install Frontend Dependencies"]
  args = "build ./frontend"
}
