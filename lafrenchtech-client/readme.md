# Deployment

## Development

- make changes,
- npm run relay
- npm run build
- rebuild docker image: `docker build --rm -f lafrenchtech-client/Dockerfile -t idkjs/lafrenchtech-client:latest lafrenchtech-client`
- push image to docker hub
- update on azure

## Production Build

- npm run schema && npm run relay
- npm run build
- serve -s build

## Docker

# Deploy to Azure

