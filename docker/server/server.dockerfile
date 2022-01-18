FROM node:16.13.0-buster-slim
MAINTAINER Shayne Thiessen <shayne@shaynethiessen.com>

# Get third-party applications
RUN apt-get update && \
    apt-get install -yq imagemagick && \
    rm -rf /var/lib/apt/lists/*

# Create folders
RUN mkdir -p /app/packages/server && \
    mkdir -p /app/packages/types
WORKDIR /app

# Add package.json files
ADD docker/common/package.json /app
ADD packages/server/package.json /app/packages/server
ADD packages/types/package.json /app/packages/types

# Install packages
RUN yarn install --prod && \
    yarn cache clean

# Add built code
ADD packages/types/build/ /app/packages/types
ADD packages/server/build/ /app/packages/server
ADD packages/types/build/ /app/packages/server/node_modules/terrene-types/build

ADD docker/server/docker_command.sh /app
RUN chmod +x docker_command.sh

ENV NODE_ENV production

CMD /app/docker_command.sh
