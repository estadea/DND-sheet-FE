import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {switchMap, tap} from 'rxjs/operators';
import {SpellFormComponent} from 'src/app/components/spell-form/spell-form.component';
import {UserFormComponent} from 'src/app/components/user-form/user-form.component';
import {UserStore} from 'src/app/pages/private/users/service/user.store';
import {UserService} from './service/user.service';
import {User} from "../../../model/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public userList;
  public openMenu: boolean = false;
  public isOver = false;

  constructor(private _userService: UserService,
              private _userStore: UserStore,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.userList = this._userStore.users;
    this._userService.getList().subscribe();

  }

  clickMenu(): void {
    this.openMenu = !this.openMenu;
  }

  openCreateUser(user?: User): void {
    let save$;
    !user && this.clickMenu();
    const ref = this.dialog.open(UserFormComponent, {});
    if (user) {
      ref.componentInstance.user = user;
    }
    const sub = ref.componentInstance.saveEmit.subscribe(f => {
      console.log('emit ', f);
      save$ = this._userService.save(f)
        .pipe(
          tap(() => ref.close())
        )
        .subscribe();
    });

    ref.afterClosed().subscribe(() => {
      sub.unsubscribe();
      save$?.unsubscribe();
    });
  }

  hello(mex: string): void {
    alert(mex);
  }

  deleteUser(username: string): void {
    this._userService.delete(username).subscribe();
  }

  editUser = (user: User): void => {
    this.openCreateUser(user);
  }
}
