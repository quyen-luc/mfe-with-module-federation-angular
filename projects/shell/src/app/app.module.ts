import { ModuleFederationToolsModule, } from '@angular-architects/module-federation-tools';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PluginProxyComponent } from './plugins/plugin-proxy.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PluginProxyComponent,
    BrowserModule,
    AppRoutingModule,
    ModuleFederationToolsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
