# Deploy to Azure

- run: `az webapp create -g nodeAppLinuxRG -p nodeAppLinuxPlan --name FrenchTechApp --deployment-container-image-name idkjs/laftv-graphql:latest`

```json
$ az webapp create -g nodeAppLinuxRG -p nodeAppLinuxPlan --name FrenchTechApp --deployment-container-image-name idkjs/laftv-graphql:latest
{
  "availabilityState": "Normal",
  "clientAffinityEnabled": true,
  "clientCertEnabled": false,
  "cloningInfo": null,
  "containerSize": 0,
  "dailyMemoryTimeQuota": 0,
  "defaultHostName": "frenchtechapp.azurewebsites.net",
  "enabled": true,
  "enabledHostNames": [
    "frenchtechapp.azurewebsites.net",
    "frenchtechapp.scm.azurewebsites.net"
  ],
  "ftpPublishingUrl": "ftp://waws-prod-am2-143.ftp.azurewebsites.windows.net/site/wwwroot",
  "gatewaySiteName": null,
  "hostNameSslStates": [
    {
      "hostType": "Standard",
      "name": "frenchtechapp.azurewebsites.net",
      "sslState": "Disabled",
      "thumbprint": null,
      "toUpdate": null,
      "virtualIp": null
    },
    {
      "hostType": "Repository",
      "name": "frenchtechapp.scm.azurewebsites.net",
      "sslState": "Disabled",
      "thumbprint": null,
      "toUpdate": null,
      "virtualIp": null
    }
  ],
  "hostNames": [
    "frenchtechapp.azurewebsites.net"
  ],
  "hostNamesDisabled": false,
  "hostingEnvironmentProfile": null,
  "id": "/subscriptions/6540d9d8-dbbc-4a34-ba91-0c72e6931b0f/resourceGroups/nodeAppLinuxRG/providers/Microsoft.Web/sites/FrenchTechApp",
  "isDefaultContainer": null,
  "kind": "app",
  "lastModifiedTimeUtc": "2017-10-26T13:32:15.160000",
  "location": "West Europe",
  "maxNumberOfWorkers": null,
  "microService": null,
  "name": "FrenchTechApp",
  "outboundIpAddresses": "52.233.133.18,52.232.35.156,104.40.157.198,23.100.11.212,52.174.254.216",
  "premiumAppDeployed": null,
  "repositorySiteName": "FrenchTechApp",
  "reserved": true,
  "resourceGroup": "nodeAppLinuxRG",
  "scmSiteAlsoStopped": false,
  "serverFarmId": "/subscriptions/6540d9d8-dbbc-4a34-ba91-0c72e6931b0f/resourceGroups/nodeAppLinuxRG/providers/Microsoft.Web/serverfarms/nodeAppLinuxPlan",
  "siteConfig": null,
  "slotSwapStatus": null,
  "state": "Running",
  "suspendedTill": null,
  "tags": null,
  "targetSwapSlot": null,
  "trafficManagerHostNames": null,
  "type": "Microsoft.Web/sites",
  "usageState": "Normal"
}

```
## private container
- `az webapp config container set --name FrenchTechApp -g nodeAppLinuxRG --docker-registry-server-user idkjs --docker-registry-server-password 8vWpCPuU2NBm`
- output
```json
$ az webapp config container set --name FrenchTechApp -g nodeAppLinuxRG --docker-registry-server-user idkjs --docker-registry-server-password 8vWpCPuU2NBm
[
  {
    "name": "DOCKER_REGISTRY_SERVER_USERNAME",
    "slotSetting": false,
    "value": "idkjs"
  },
  {
    "name": "DOCKER_REGISTRY_SERVER_PASSWORD",
    "slotSetting": false,
    "value": null
  },
  {
    "name": "DOCKER_CUSTOM_IMAGE_NAME",
    "value": "DOCKER|idkjs/laftv-graphql:latest"
  }
]
```

## Configure environment variables
- see: https://docs.microsoft.com/en-us/azure/app-service/containers/tutorial-custom-docker-image
- add port wtih az webapp config appsettings update

- run: `az webapp config appsettings set -g nodeAppLinuxRG -n FrenchTechApp --settings WEBSITES_PORT=4000`

-output
```json
$ az webapp config appsettings set -g nodeAppLinuxRG -n FrenchTechApp --settings WEBSITES_PORT=4000
[
  {
    "name": "WEBSITES_ENABLE_APP_SERVICE_STORAGE",
    "slotSetting": false,
    "value": "false"
  },
  {
    "name": "DOCKER_REGISTRY_SERVER_USERNAME",
    "slotSetting": false,
    "value": "idkjs"
  },
  {
    "name": "DOCKER_REGISTRY_SERVER_PASSWORD",
    "slotSetting": false,
    "value": null
  },
  {
    "name": "WEBSITES_PORT",
    "slotSetting": false,
    "value": "4000"
  }
]
```