# Demo Project Showing French Companies with Special Visa Status for Developers

## TLDR
- graphiql endpoint for http://visa.lafrenchtech.com companies: http://lagraphql.azurewebsites.net/graphiql 

- list of companies: http://lafrenchtech.azurewebsites.net/

- [http://lafrenchtech.com](http://visa.lafrenchtech.com)

- Docker Images on DockerHub.com:
- client: https://hub.docker.com/r/idkjs/lafrenchtech-client/
- server: https://hub.docker.com/r/idkjs/lafrenchtech-server/

## Demonstrates [WIP]

- Relayjs, Graphql, Dockerized Apps, Multistage Docker Builds, Azure CosmosDB with MongoDB Driver, Nginx Server on Client, Automatic Re-Deployment to Azure Dockerhub on image update. Initial deployment from Azure CLI, Create-React-App behind Nginx and a bunch of other stuff I have no business knowing. 

- Things to add tests, work on ui including add D3 demo, a whole lot of other stuff.

- UI to do link images to their query data. Add link to company


## Test Docker Images Locally

- server:
- run `docker pull idkjs/lafrenchtech-server`, then `docker run --rm -it -p 80:80 idkjs/lafrenchtech-client:latest`

- client:
- run `docker pull idkjs/lafrenchtech-server`, then `docker run --rm -it -p 80:80 idkjs/lafrenchtech-server:latest`


