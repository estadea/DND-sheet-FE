import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Spell} from "../../model/spell";

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss']
})
export class SpellComponent implements OnInit {
  @Input() spell: Spell;
  @Output() editEmit:EventEmitter<Spell> = new EventEmitter<Spell>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public edit(spell:Spell):void{
    this.editEmit.emit(spell)
  }

}
