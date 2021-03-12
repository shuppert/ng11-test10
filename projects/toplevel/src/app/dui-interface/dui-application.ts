import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export enum EntryType {
  Module = 'Module',
  Component = 'Component'
}

export interface DuiApplication extends LoadRemoteModuleOptions {
    displayName: string,
    routePath: string,
    ngModuleName: string,
    entryType: EntryType,
    component: string
};
