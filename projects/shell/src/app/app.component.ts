import { Component, OnInit } from '@angular/core';
import { loadManifest } from '@angular-architects/module-federation';
import { LookupService } from './plugins/lookup.service';
import { PluginOptions } from './plugins/plugin';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedIndex: number = 0;

  links = [{
    url: 'home',
    name: 'Home'
  }, {
    url: 'login',
    name: 'Login'
  }, {
    url: 'angular12',
    name: 'Angular version 12'
  }, {
    url: 'react1',
    name: 'React'
  }]

  title = 'shell';

  plugins: PluginOptions[] = [];
  workflow: PluginOptions[] = [];
  showConfig = false;

  options: WebComponentWrapperOptions  = { remoteEntry: 'http://localhost:4301/remoteEntry.js',
  remoteName: 'angular12',
  exposedModule: './web-component',
  elementName: 'angular12-element'}

  props = {
    message: 'Hello from Shell',
  };

  constructor(
    private lookupService: LookupService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    ).subscribe(e => { 
      this.selectedIndex = this.links.findIndex(link => link.url === e.url.split('/')[1]) 
    });
  }

  async ngOnInit(): Promise<void> {
    this.plugins = await this.lookupService.lookup();
  }

  add(plugin: PluginOptions): void {
    this.workflow.push(plugin);
  }

  toggle(): void {
    this.showConfig = !this.showConfig;
  }

  navigateTo(index: number): void {
    this.selectedIndex = index;
    this.router.navigate([this.links[index].url]);
  }
}
