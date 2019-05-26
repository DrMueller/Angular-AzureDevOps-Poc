import { Component } from '@angular/core';

import { DevopsProxyService } from '../../core-services/devops-proxy/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-azuredevops-poc';

  constructor(private proxy: DevopsProxyService) {
  }

  public get currentUserName(): string {
    return this.proxy.getCurrentUserName();
  }
}
