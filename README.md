# Terrene
## Discover World History

## Environment setup

1. Clone repository
2. Copy packages/server/env.default to packages/server/.env and update config.
3. Navigate to project root directory
4. Run `yarn`
5. Run `yarn build:types`
6. Run `yarn db:create`
7. Run `yarn start:server`
8. Run `yarn start:web`

## Available Scripts

In the project directory, you can run:

### `yarn start:server`

Runs the server in the development mode on port 3001.

The server will reload if you make edits.

### `yarn start:web`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build:migrations`

Runs migrations to update database setup. Migrations are ran/tested against copies of our production server. Depending on your configuration, they may or may not work.

For development purposes we recommend running `yarn db:create` to create a clean database.

### `yarn build:server`

Builds the server for production to the `build` folder.\

The build is minified, and the filenames include the hashes.\
Your server is ready to be deployed!

### `yarn build:web`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn fix:lint:%package%`

Attempts to automatically fix all linting issues.

### `yarn test:%package%`

Uses depcheck to see if we have any unused dependencies.

### `yarn test:lint:%package%`

Runs lint to ensure all lint rules are passed.

### `yarn test:types:%package%`

Runs typescript to ensure we don't have any undefined or mismatched types.
