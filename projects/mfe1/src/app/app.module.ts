import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { UploadTComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent,
    UploadTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
