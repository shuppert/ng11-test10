import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComponent } from './c/c.component';
import { RouterModule } from '@angular/router';

const duiModule2Routing: ModuleWithProviders<RouterModule> = RouterModule.forChild([
  {
    path: '',
    component: CComponent
  },
  {
    path: 'c',
    component: CComponent
  }
])

@NgModule({
  declarations: [CComponent],
  imports: [
    CommonModule,
    duiModule2Routing
  ]
})
export class Dui2Module { }
