#!/usr/bin/env bash
export APP_ENV="development"
export PORT="3000"

if [ "$1" == "up" ]; then
    docker-compose up --build
else
    docker-compose "$@"
fi
