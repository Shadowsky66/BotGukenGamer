FROM ubuntu:bionic

SHELL ["/bin/bash", "-c"]

# INSTALL PACKAGES
RUN DEBIAN_FRONTEND="noninteractive" \
    apt-get update && apt-get install -y git curl

# INSTALL NODE AND PACKAGE MANAGER
ARG NODE_VERSION="14.5.0"

ENV NVM_DIR   /root/.nvm
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN curl https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# DOWNLOAD AND BUILD APPLICATION
RUN git clone https://github.com/Shadowsky66/BotGukenGamer.git /srv \
    && npm install --only=production --prefix /srv
    
# LAUNCH APPLICATION
CMD ["npm", "run", "start", "--prefix", "/srv"]
