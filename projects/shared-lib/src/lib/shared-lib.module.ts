import { NgModule } from '@angular/core';
import { AuthLibModule } from 'auth-lib';
import { SharedLibComponent } from './shared-lib.component';



@NgModule({
  declarations: [
    SharedLibComponent
  ],
  imports: [
    AuthLibModule
  ],
  exports: [
    SharedLibComponent
  ]
})
export class SharedLibModule { }
