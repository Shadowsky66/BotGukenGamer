FROM ubuntu:bionic

SHELL ["/bin/bash", "-c"]

# INSTALL PACKAGES
ARG DEBIAN_FRONTEND="noninteractive"

RUN apt-get update \
    && apt-get install -y git curl

# INSTALL NODE AND PACKAGE MANAGER
ARG NODE_VERSION="14.5.0"

ENV NVM_DIR /root/.nvm

RUN curl https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# DOWNLOAD AND BUILD APPLICATION
ARG BOT_TOKEN
ARG BOT_PREFIX="!"

WORKDIR srv

RUN cd /srv \
    && git clone https://github.com/Shadowsky66/BotGukenGamer.git . \
    && npm install --only=production
    
# LAUNCH APPLICATION
CMD ["/bin/bash", "-c", "node", "index.js"]
