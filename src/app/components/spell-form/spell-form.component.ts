import {Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Spell} from "../../model/spell";

@Component({
  selector: 'app-spell-form',
  templateUrl: './spell-form.component.html',
  styleUrls: ['./spell-form.component.scss']
})
export class SpellFormComponent implements OnInit {

  @Input() spell: Spell;
  public saveEmit: EventEmitter<any>;
  public form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.saveEmit = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.form = this._fb.group({
      nome: [this.spell?.Nome || '', Validators.required],
      descrizione: [this.spell?.Descrizione || '', Validators.required],
      cd: [this.spell?.CD || '', Validators.required],
      livello: [this.spell?.Livello || '', Validators.required],
      ts: [this.spell?.TS || '', Validators.required],
      classe: [this.spell?.Classe || '', Validators.required],
      ID:[this.spell?.ID || null]
    });
  }

  public save(): void {
    console.log(this.form.value);
    if (this.form.invalid) {
      return;
    }
    this.saveEmit.emit(this.form.value);
  }

  isInvalid(field: string): ValidationErrors {
    return this.form.get(field).errors;
  }
}
