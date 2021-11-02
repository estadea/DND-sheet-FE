import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {catchError, switchMap} from 'rxjs/operators';
import {SignService} from 'src/app/pages/public/sign.service';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';
import {of} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public error = '';

  constructor(private _signService: SignService,
              private _router: Router,
              private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login = (): void => {
    console.log(this.form);
    const f = this.form.value;
    if (this.form.invalid) {
      return;
    }
    this._signService.signIn(f)
      .pipe(
        switchMap(() => this._router.navigate(['/'])),
        catchError(e => {
          this.error = 'Incorrect username or password';
          console.log(e);
          return of([])
        })
      )
      .subscribe();
  };

  isInvalid(field: string): boolean {
    return !!this.form.get(field).errors;
  }
}
