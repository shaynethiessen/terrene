#!/usr/bin/env bash

cd ../

yarn docker:build:web
yarn docker:build:server

yarn docker:push:web
yarn docker:push:server
