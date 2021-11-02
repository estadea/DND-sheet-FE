import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {PublicShellComponent} from "./public-shell.component";


const routes = [
  {
    path: '', component: PublicShellComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../../pages/public/login/login.module').then(m => m.LoginModule)
      },
      // {
      //   path: 'register',
      //   loadChildren: () => import('../../pages/public/register/register.module').then(m => m.RegisterModule)
      // }
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    [
      RouterModule.forChild(routes)]
  ]
})
export class PublicShellRouterModule {
}
