FROM node:16.13.0-buster-slim
MAINTAINER Shayne Thiessen <shayne@shaynethiessen.com>

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

ADD docker/server/docker_command.sh /app
RUN chmod +x docker_command.sh

ENV NODE_ENV production

CMD /app/docker_command.sh
