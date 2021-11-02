import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {switchMap, tap} from 'rxjs/operators';
import {User} from 'src/app/model/user';
import {Observable, of} from 'rxjs';
// import * as cryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';
import {UserStore} from 'src/app/pages/private/users/service/user.store';
import {AuthService} from "../../../../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpService: HttpClient,
              private _userStore: UserStore,
              private _authService:AuthService) {
  }

  list(): Observable<User[]> {
    const users: User[] = [];

    users.push(
      new User('1', 'Nia', 'nia@gmail.com', 'F', 0),
      new User('1', 'Daniele', 'daniele@gmail.com', 'M', 0),
      new User('1', 'Robert', 'robert@gmail.com', 'M', 0),
    );
    return of(users);
  }

  save(form: any): Observable<any> {
    let url = '';
    const body = new FormData();
    const {username, password, email, ruolo, oldUsername} = form;

    if (oldUsername) {
      url = '/modificaUtente';
      body.append('ID', this._authService.id.toString());
      body.append('username', username);
      body.append('old_username', oldUsername);
      body.append('email', email);
      body.append('password', password || 'NULL');
      body.append('ruolo', ruolo);

    } else {
      url = '/aggiungiUtente';
      body.append('ID', this._authService.id.toString());
      body.append('username', username);
      body.append('email', email);
      body.append('password', password);
      body.append('ruolo', ruolo);
    }

    return this._httpService.post(url, body, {responseType: 'text'}).pipe(
      switchMap(() => this.getList())
    );
  }

  getList(): Observable<any> {
    const url = '/all_user/'+this._authService.id.toString();
    return this._httpService.get(url)
      .pipe(
        tap(r => console.log(r)),
        tap(users => this._userStore.setUsers(users))
      );
  }

  delete(username: string): Observable<any> {
    const url = '/rimuoviUtente';
    const body = new FormData();
    body.append('ID', this._authService.id.toString());
    body.append('username', username);
    return this._httpService.post(url, body, {responseType: 'text'}).pipe(
      switchMap(() => this.getList())
    );
  }
}


