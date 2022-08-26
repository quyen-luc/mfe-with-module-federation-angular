import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'home',
      loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
    }, {
      path: 'login',
      loadChildren: () => import("mfe1/LoginModule").then(m => m.LoginModule)
    },
    // }, {
    //   path: 'login',
    //   loadChildren: () => loadRemoteModule({
    //     type: 'module',
    //     remoteEntry: 'http://localhost:4201/remoteEntry.js',
    //     exposedModule: './LoginModule'
    //   }).then(m => m.LoginModule)
    // }, 
    {
      path: 'angular12',
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'http://localhost:4301/remoteEntry.js',
        remoteName: 'angular12',
        exposedModule: './web-component',
        elementName: 'angular12-element'
      } as WebComponentWrapperOptions
    },{
      path: 'react1',
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'http://localhost:4302/remoteEntry.js',
        remoteName: 'react1',
        exposedModule: './web-component',
        elementName: 'react-element'
      } as WebComponentWrapperOptions
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
