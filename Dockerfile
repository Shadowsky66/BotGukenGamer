FROM node:current-alpine

WORKDIR /srv

RUN \
    echo "**** install git ****" && \
    apk add git && \
    echo "**** clone sources ****" && \
    git clone https://github.com/Shadowsky66/BotGukenGamer.git . && \
    echo "**** install dependencies ****" && \
    npm install --only=production
    
CMD ["npm", "run", "start", "--prefix", "/srv"]
