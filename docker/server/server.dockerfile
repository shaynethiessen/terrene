FROM node:16.13.0-buster-slim
MAINTAINER Shayne Thiessen <shayne@shaynethiessen.com>

# Create folders
RUN mkdir -p /app/packages/server
WORKDIR /app

# Add package.json files
ADD docker/common/package.json /app
ADD packages/server/package.json /app/packages/server

# Add built code
ADD packages/server/build/ /app/packages/server
ADD packages/types/build/ /app/packages/types

# Install packages
RUN yarn install --prod && \
    yarn cache clean

ADD docker/server/docker_command.sh /app
RUN chmod +x docker_command.sh

CMD /app/docker_command.sh
