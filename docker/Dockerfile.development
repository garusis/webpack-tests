FROM node:6.10

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

ADD . /app
WORKDIR /app

RUN rm -rf node_modules && yarn && cd node_modules/webpack && yarn link && \
    cd ../webpack-dev-server && yarn link
ENTRYPOINT yarn start