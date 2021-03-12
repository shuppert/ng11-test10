import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { RouterModule } from '@angular/router';

const duiModule1Routing: ModuleWithProviders<RouterModule> = RouterModule.forChild([
  {
    path: '',
    component: AComponent
  },
  {
    path: 'a',
    component: AComponent
  },
  {
    path: 'b',
    component: BComponent
  }
])

@NgModule({
  declarations: [AComponent, BComponent],
  imports: [
    CommonModule,
    duiModule1Routing
  ]
})
export class Dui1Module { }
