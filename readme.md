# Azure DevOps Extensions with Angular

## Overview

This repository combines Azure DevOps (Former TFS / VSTS) extensions with an Angular app.
The example contains two Azure DevOps extensions:

- A "Hello World Hub" hub in the Repos area
- A Dashboard widget

## Points of interest

Instead of using the index.html, we use the Azure DevOps extension HTML files and load the Angular artfiacts manually.
The exemplary hub, dashboard and the init javascript are located in the vss-folder.

## Build and deployment

1. Build the Angular app
```
npm run ci-build-prod
```

2. Build the Azure DevOps VSIX Package
```
npm run build-package
```

3. Deploy to Azure DevOps

This is currently done with Azure DevOps via the following task:
```yaml
- task: Npm@1
  displayName: 'Publish TFX Package'
  inputs:
    command: custom

    verbose: false

    customCommand: 'run ci-publish-package -- --auth-type pat --token $(PublishToken)'
```

## Links

### General

- **Overview:** https://docs.microsoft.com/en-us/azure/devops/extend/overview?view=azure-devops
- **Core SDK reference:** https://docs.microsoft.com/de-de/azure/devops/extend/reference/client/core-sdk?view=azure-devops
- **Publishing:** https://docs.microsoft.com/de-de/azure/devops/extend/publish/command-line?view=azure-devops&viewFallbackFrom=vsts
- **TFX extension commands (TFX CLI):** https://github.com/microsoft/tfs-cli/blob/master/docs/extensions.md 

### Manifest

- **Manifest specification:** https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops 
- **Navigation (f.e. Icons in Hub):** https://docs.microsoft.com/en-us/azure/devops/extend/develop/web-navigation?view=azure-devops&viewFallbackFrom=vsts#hub-icon

### Samples

- **Samples overview:** https://docs.microsoft.com/en-us/azure/devops/extend/develop/samples-overview?view=azure-devops
- **Dashboard widget proceeding:** https://docs.microsoft.com/en-us/azure/devops/extend/develop/add-dashboard-widget?view=azure-devops
