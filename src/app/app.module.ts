import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

// Modules
import {
  InvoiceModule,
  ProductModule,
  ReportModule,
  SettingModule
} from './modules';

// Service
import {
  ProductService,
  PropertiesService,
  ReportService
} from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    InvoiceModule,
    ProductModule,
    ReportModule,
    RouterModule,
    SettingModule,
    SharedModule.forRoot()
  ],
  providers: [
    ProductService,
    PropertiesService,
    ReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
