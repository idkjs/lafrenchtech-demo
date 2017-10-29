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


## Rebass/Syllint Notes

- To ensure Rebass's theme is properly configured, use the <Provider /> component at the root of your application. See: http://jxnblk.com/rebass/getting-started#Provider


## Docker

# Deploy to Azure

