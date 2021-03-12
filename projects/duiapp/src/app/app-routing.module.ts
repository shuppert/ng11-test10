import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: 'dui1', loadChildren: () => import('./dui1/dui1.module').then((m) => m.Dui1Module)
  },
  {
    path: 'dui2', loadChildren: () => import('./dui2/dui2.module').then((m) => m.Dui2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
