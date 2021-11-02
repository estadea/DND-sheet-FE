import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SpellFormComponent} from 'src/app/components/spell-form/spell-form.component';
import {SpellService} from 'src/app/pages/private/spell-list/service/spell.service';
import {SpellStore} from "./service/spell.store";
import {Spell} from "../../../model/spell";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {
  public openMenu: boolean = false;
  public isOver = false;
  public spellList: Observable<Spell[]>;

  constructor(private dialog: MatDialog,
              private _spellService: SpellService,
              private _spellStore: SpellStore) {
  }

  clickMenu(): void {
    this.openMenu = !this.openMenu;
  }

  openCreateSpell(spell?: Spell): void {
    !spell && this.clickMenu();
    const ref = this.dialog.open(SpellFormComponent, {});
    if (spell) {
      ref.componentInstance.spell = spell;
    }
    const sub = ref.componentInstance.saveEmit.subscribe(f => {
      this._spellService.save(f)
        .pipe(
          tap(() => ref.close())
        ).subscribe();
      console.log('emit ', f);
    });

    ref.afterClosed().subscribe(() => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.spellList = this._spellStore.spells;
    this._spellService.getList().subscribe();
  }

  edit(spell: Spell): void {
    console.log(spell)
    this.openCreateSpell(spell);
  }

}
