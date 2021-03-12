import { Injectable } from '@angular/core';
import { DuiApplication, EntryType } from './dui-application';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<DuiApplication[]> {
        return Promise.resolve([
          {
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                remoteName: 'duiapp',
                exposedModule: './Module',
                displayName: 'Component A',
                routePath: 'a',
                ngModuleName: 'Dui1Module',
                entryType: EntryType.Module
            },        
            {
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                remoteName: 'duiapp',
                exposedModule: './Module2',              
                displayName: 'Component C',
                routePath: 'c',
                ngModuleName: 'Dui2Module',
                entryType: EntryType.Module        
            },
            {
                remoteEntry: 'http://localhost:4202/remoteEntry.js',
                remoteName: 'duiapp2',
                exposedModule: './Module3',              
                displayName: 'Component D',
                routePath: 'd',
                ngModuleName: 'Dui3Module',
                entryType: EntryType.Module                
            },
            {
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                remoteName: 'duiapp',
                exposedModule: './CComponent',         
                displayName: 'Component C',
                routePath: 'c',
                ngModuleName: 'Dui2Module',
                entryType: EntryType.Component,
                component: 'CComponent'
            },
            {
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                remoteName: 'duiapp',
                exposedModule: './BComponent',         
                displayName: 'Component B',
                routePath: 'b',
                ngModuleName: 'Dui2Module',
                entryType: EntryType.Component,
                component: 'BComponent'
            },            
            {
                remoteEntry: 'http://localhost:4202/remoteEntry.js',
                remoteName: 'duiapp2',
                exposedModule: './DComponent',         
                displayName: 'Component D',
                routePath: 'd',
                ngModuleName: 'Dui3Module',
                entryType: EntryType.Component,
                component: 'DComponent'                        
            },
            {
                remoteEntry: 'http://localhost:4202/remoteEntry.js',
                remoteName: 'duiapp2',
                exposedModule: './DLoaderComponent',         
                displayName: 'Component D with Loader',
                routePath: 'dloader',
                ngModuleName: 'Dui3Module',
                entryType: EntryType.Component,
                component: 'DloaderComponent'                        
            } 
        ] as DuiApplication[]);
    }
}
