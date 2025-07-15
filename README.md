# Idealyst Framework

## Quick Setup

### Initialize an Idealyst Monorepo

Monorepos allow you to share code across multiple projects
`npx @idealyst/cli init <name>`

### Create a project

You can create React Web, React Native, or Shared Projects
`npx @idealyst/cli create {<package-name>} {--type <web|native|shared>} {--app-name <RealName>}`

### Install dependencies

From the root workspace
`yarn install`

### Running apps

#### Web Apps

From the web app's project
`yarn dev`

#### React Native apps

From the native app's project
`yarn android` or `yarn ios`

Make sure Metro is running
`yarn start`