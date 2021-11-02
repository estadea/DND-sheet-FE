import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {SpellStore} from "./spell.store";
import {AuthService} from "../../../../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(private _httpService: HttpClient,
              private _spellStore: SpellStore,
              private _authService: AuthService) {
  }


  getList(): Observable<any> {
    const url = '/all_incantesimi/'+this._authService.id;
    return this._httpService.get(url)
      .pipe(
        tap(r => console.log(r)),
        tap(spells => this._spellStore.setSpells(spells))
      );
  }

  save(form: any): Observable<any> {
    const {nome, descrizione, cd, ts, livello, classe} = form;
    const url = '/aggiornaDatabase';
    const body = new FormData();
    body.append('ID', this._authService.id.toString());
    body.append('Nome', nome);
    body.append('Descrizione', descrizione);
    body.append('CD', cd);
    body.append('TS', ts);
    body.append('Classe', classe);
    body.append('Livello', livello);

    // const payload = {
    //   ID: '2',
    //   Nome: nome,
    //   Descrizione: descrizione,
    //   CD: cd,
    //   TS: ts,
    //   Classe: classe
    // };

    return this._httpService.post(url, body, {responseType: 'text'})
      .pipe(
        tap(r => console.log(r)
        ),
        switchMap(() => this.getList())
      );
  }
}
