import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {User} from "../../model/user";
import {CustomValidator} from "../../validators/password.validator";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  public saveEmit: EventEmitter<any>;
  public form: FormGroup;
  public roles = [{label: 'admin', id: 1}, {label: 'user', id: 0}];

  constructor(private _fb: FormBuilder) {
    this.saveEmit = new EventEmitter<any>();
  }

  ngOnInit(): void {
    console.log('[User]: ', this.user)
    let ruolo;
    if (this.user) {
      ruolo = this.roles.find(r => r.id === this.user.ruolo)
    }
    console.log("RUOLO: ", ruolo);

    this.form = this._fb.group({
      username: [this.user?.username || '', Validators.required],
      password: ['', [CustomValidator.passwordRequired(this.user), Validators.pattern('^[a-zA-Z0-9!$£/()=?^*+><.,:_+@]{8,}$')]],
      email: [this.user?.email || '', [Validators.required, Validators.email]],
      ruolo: [ruolo?.id ?? '', Validators.required],
      oldUsername: [this.user?.username || null]
    });
  }

  public save(): void {
    console.log(this.form.value);
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }
    this.saveEmit.emit(this.form.value);
  }

  isInvalid(field: string): ValidationErrors {
    return this.form.get(field).errors;
  }
}
