import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../pages/private/users/service/user.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-private-shell',
  templateUrl: './private-shell.component.html',
  styleUrls: ['./private-shell.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrivateShellComponent implements OnInit {
  public userList;

  constructor(private _userService: UserService,
              private _authService: AuthService,
              private _router: Router) {

  }

  ngOnInit(): void {
    this.userList = this._userService.getList();
  }

  public logout = (): void => {
    this._authService.logout();
    this._router.navigate(['/public/login'])
  }
}
