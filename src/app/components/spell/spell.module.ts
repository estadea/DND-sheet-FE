import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellComponent } from './spell.component';
import {MaterialModule} from "../../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [SpellComponent],
  exports: [
    SpellComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SpellModule { }
