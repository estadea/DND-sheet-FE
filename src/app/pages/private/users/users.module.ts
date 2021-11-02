import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserFormModule} from 'src/app/components/user-form/user-form.module';
import {UsersComponent} from './users.component';
import {Route, RouterModule} from "@angular/router";
import {UserModule} from "../../../components/user/user.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../../../material.module";

const routes: Route[] = [{
  path: '', component: UsersComponent
}]

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserModule,
    FlexLayoutModule,
    MaterialModule,
    UserFormModule
  ]
})
export class UsersModule {
}
