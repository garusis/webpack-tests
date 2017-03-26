#!/usr/bin/env bash
export APP_ENV="development"
export PORT="5000"
export YARN_CACHE_DIR=$(yarn cache dir)

if [ "$1" == "up" ]; then
    docker-compose up --build
else
    docker-compose "$@"
fi
