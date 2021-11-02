import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Spell} from "../../../../model/spell";


@Injectable({
  providedIn: 'root'
})
export class SpellStore {
  private _spells: Subject<Spell[]> = new Subject<Spell[]>();
  public spells: Observable<Spell[]> = this._spells.asObservable();


  setSpells(spells: Spell[]): void {
    this._spells.next(spells);
  }
}
