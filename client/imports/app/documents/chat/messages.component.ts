import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Message } from '../../../../../imports/models/message';
import { AuthService } from '../../auth/auth.service';
import User = Meteor.User;

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.component.html',
  styleUrls: ['messages.component.scss']
})
export class MessagesComponent implements OnChanges {
  @Input() public messages: Array<Message>;
  @Input() public users: Array<User>;
  public usersDictionary = {};

  public get myId(): string {
    return this._auth.currentUserId;
  }

  constructor(private _auth: AuthService) {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.users && this.users) {
      this.usersDictionary = this.users.reduce((m, i) => ({ ...m, [i._id]: i }), {});
    }
  }
}