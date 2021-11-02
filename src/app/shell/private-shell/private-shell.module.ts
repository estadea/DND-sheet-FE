import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateShellComponent } from './private-shell.component';
import {PrivateShellRouterModule} from "./private-shell-router.module";
import {MaterialModule} from "../../material.module";
import {RouterModule} from "@angular/router";
import {UserModule} from "../../components/user/user.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [PrivateShellComponent],
  imports: [
    CommonModule,
    PrivateShellRouterModule,
    RouterModule,
    MaterialModule,
    UserModule,
    FlexLayoutModule
  ]
})
export class PrivateShellModule { }
