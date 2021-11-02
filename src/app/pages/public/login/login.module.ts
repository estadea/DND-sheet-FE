import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../../material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: LoginComponent}
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ]
})
export class LoginModule {
}
