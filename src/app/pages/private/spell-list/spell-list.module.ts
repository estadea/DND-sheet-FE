import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpellFormModule} from 'src/app/components/spell-form/spell-form.module';
import {MaterialModule} from 'src/app/material.module';
import {SpellListComponent} from './spell-list.component';
import {Route, RouterModule} from "@angular/router";
import {SpellModule} from "../../../components/spell/spell.module";
import {FlexLayoutModule} from "@angular/flex-layout";

const routes: Route[] = [
  {
    path: '', component: SpellListComponent
  }
]

@NgModule({
  declarations: [SpellListComponent],
  imports: [
    CommonModule,
    SpellModule,
    MaterialModule,
    SpellFormModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class SpellListModule {
}
