import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../model/user';
import {Spell} from "../../model/spell";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() deleteEmit: EventEmitter<string>;
  @Output() editEmit: EventEmitter<User>;

  constructor() {
    this.deleteEmit = new EventEmitter<string>();
    this.editEmit = new EventEmitter<User>();
  }

  ngOnInit(): void {
  }

  public edit = (user: User) => {
    this.editEmit.emit(user)
  };

  public delete(username: string): void {
    this.deleteEmit.emit(username);
  }

}
