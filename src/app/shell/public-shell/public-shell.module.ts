import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicShellComponent } from './public-shell.component';
import {PublicShellRouterModule} from "./public-shell-router.module";
import {MaterialModule} from "../../material.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [PublicShellComponent],
  imports: [
    CommonModule,
    PublicShellRouterModule,
    RouterModule,
    MaterialModule
  ]
})
export class PublicShellModule { }
