import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {PrivateShellComponent} from "./private-shell.component";


const routes = [
  {
    path: '', redirectTo: 'user-list'
  },
  {
    path: '', component: PrivateShellComponent,
    children: [
      {
        path: 'user-list',
        loadChildren: () => import('../../pages/private/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'spell-list',
        loadChildren: () => import('../../pages/private/spell-list/spell-list.module').then(m => m.SpellListModule)
      },
    ]
  }


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PrivateShellRouterModule {
}
