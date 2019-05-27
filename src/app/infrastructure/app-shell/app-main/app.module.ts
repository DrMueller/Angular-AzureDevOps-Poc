import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestDashboardComponent } from 'src/app/areas/dashboard-testing/components/test-dashboard';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
