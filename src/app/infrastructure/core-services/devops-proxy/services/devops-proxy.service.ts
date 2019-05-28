import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevopsProxyService {
  public getCurrentUserName(): string {
    return VSS.getWebContext().user.name;
  }
}
