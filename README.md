# Webpack Tests

   A playground webpack repo using Yarn, Docker and Webpack for dev and prod.

## Requirements
This project use Docker, and this is why you don't need more requirements
that `docker`, `docker-compose` and `npm` or `yarn` (just if you want run the `compose` npm script... which I commend in development)

## Run
### Development
In development you just need to run
    
    yarn run compose up

or

    npm run compose up    

When `compose up` task finish ... . The development container 
*(docker/Dockerfile.development)* has the project root mounted
as a volume at `/app` directory. For this reason, you don't need
rebuild the container if you make changes in code. All your changes
are reflected inside the container.

