import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User} from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserStore {
  private _users: Subject<User[]> = new Subject<User[]>();
  public users: Observable<User[]> = this._users.asObservable();


  setUsers(user: User[]): void {
    this._users.next(user);
  }
}
