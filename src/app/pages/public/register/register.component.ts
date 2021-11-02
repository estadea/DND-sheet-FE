import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {SignService} from 'src/app/pages/public/sign.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  constructor(private _fb: FormBuilder,
              private _signService: SignService) {
  }

  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9!$£/()=?^*+><.,:_+@]{8,}$')]]
    });
  }

  signup(): void {
    if (this.form.invalid) {
      return;
    }
    this._signService.signup(this.form.value).subscribe();
  }

  isInvalid(field: string): ValidationErrors {
    return this.form.get(field).errors;
  }

}
