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

### Foreword

The actual deployment is done via Azure DevOps pipeline. To manually deploy, proceed with the following steps:

1. Assure you have a registered publisher on the portal. Link: https://marketplace.visualstudio.com/manage/publishers
2. In the vss-extension.json:
 - Replace the publisher "DrMueller2" with yours. ATTENTION: The publisher id is also part of the the hub icons, assure to replace these paths too!
 - Replace __BuildVersion__ with an actual version, for example "0.0.1"

3. Build the Angular app
```
npm run ci-build-prod
```

4. Build the VSIX package
```
npm run build-package
```

5. Upload the generated VSIX packag manually with in the publisher portal
6. Share it with your company
7. Install the extension via https://xxx.visualstudio.com/_settings/extensions?tab=shared
8. Profit!

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
