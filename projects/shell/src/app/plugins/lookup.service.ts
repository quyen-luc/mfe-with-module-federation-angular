import { Injectable } from "@angular/core";
import { PluginOptions } from "./plugin";

@Injectable({
    providedIn: 'root'
})
export class LookupService{
    lookup(): Promise<PluginOptions[]> {
        return Promise.resolve([
            {
                type: 'module',
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                exposedModule: './Download',

                displayName: 'Download',
                componentName: 'DownloadComponent'
            },
            {
                type: 'module',
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                exposedModule: './Upload',

                displayName: 'Upload',
                componentName: 'UploadTComponent'
            }
        ] as PluginOptions[]);
    }
}