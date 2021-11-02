import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _logged = false;
  private _id: number;

  constructor() {
    let id = sessionStorage.getItem('id');
    if (sessionStorage.getItem('id')) {
      this.id = +id;
    }
  }

  public logout()  {
    this._id = null;
    this.logged = false;
    sessionStorage.removeItem('id');
  }

  get logged(): boolean {
    return this._logged;
  }

  set logged(logged: boolean) {
    this._logged = logged;
  }

  set id(id: number) {
    sessionStorage.setItem('id', '' + id);
    this._id = id;
    this.logged = true;
  }

  get id(): number {
    return this._id;
  }
}
