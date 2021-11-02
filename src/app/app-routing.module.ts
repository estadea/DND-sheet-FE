import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PublicShellComponent} from "./shell/public-shell/public-shell.component";
import {PrivateShellComponent} from "./shell/private-shell/private-shell.component";
import {LoggedGuard} from "./guard/logged.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shell/private-shell/private-shell.module').then(m => m.PrivateShellModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'public',
    loadChildren: () => import('./shell/public-shell/public-shell.module').then(m => m.PublicShellModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
