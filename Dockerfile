FROM node:12.18.3-buster-slim

WORKDIR /srv

RUN echo "**** install build essential ****" \
    && apt update \
    && apt install -y \
        git \
        python \
        build-essential

COPY . .

RUN echo "**** install dependencies ****" \
    && npm install --only=production

RUN echo "**** remove build essential ****" \
    && apt remove -y \
        git \
        python \
        build-essential \
    && apt clean

CMD ["npm", "start"]