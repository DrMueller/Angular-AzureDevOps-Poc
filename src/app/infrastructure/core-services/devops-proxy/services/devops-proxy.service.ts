import { Injectable } from '@angular/core';

declare var VSS: any;

@Injectable({
  providedIn: 'root'
})
export class DevopsProxyService {
  // For API reference, see https://docs.microsoft.com/de-de/azure/devops/extend/reference/client/core-sdk?view=azure-devops
  public getCurrentUserName(): string {
    return VSS.getWebContext().user.name;
  }
}
