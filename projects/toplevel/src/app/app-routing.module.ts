import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfigComponent } from './config/config.component';
import { TestComponent } from './test/test.component';

export const appRoutes: Routes = [
  {
    path: 'config',
    component: ConfigComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    DynamicDialogModule
  ],
  exports: [RouterModule],
  providers: [
    DialogService
  ],
})
export class AppRoutingModule { }
