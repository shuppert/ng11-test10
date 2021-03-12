import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DComponent } from './d/d.component';
import { DloaderComponent } from './dloader/dloader.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

const duiModule3Routing: ModuleWithProviders<RouterModule> = RouterModule.forChild([
  {
    path: '',
    redirectTo: 'd'
  },
  {
    path: 'd',
    component: DComponent
  },
  {
    path: 'dloader',
    component: DloaderComponent
  }
])

@NgModule({
  declarations: [DloaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    DynamicDialogModule,
    duiModule3Routing
  ]
})
export class Dui3Module { }
