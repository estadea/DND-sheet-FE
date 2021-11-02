import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import sha256 from 'crypto-js/sha256';
import {AuthService} from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private _httpService: HttpClient,
              private _authService: AuthService) {
  }

  signup(form: any): Observable<any> {
    const url = '/register';
    const {username, email, password} = form;
    // password = sha256(password).toString();
    // form.password = password;
    const body = new FormData();
    body.append('username', username);
    body.append('email', email);
    body.append('password', password);
    console.log(form);
    console.log(body);
    return this._httpService.post(url, body, {responseType: 'text'})
      .pipe(
        tap(r => console.log(r)),
        tap(r => console.log(r))
      );
  }

  signIn(form: any): Observable<any> {
    // TODO /admin ?
    const url = '/admin';
    const {username, password} = form;
    // password = sha256(password).toString();
    // form.password = password;
    const body = new FormData();
    body.append('username', username);
    body.append('password', password);
    return this._httpService.post(url, body)
      .pipe(
        map((r: any[]) => {
          if (r.length === 0)
            throw 'not valid';
            this._authService.id = r[0].id;
        })
      );
  }
}
