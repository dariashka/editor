import {
  AfterViewChecked,
  AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges,
  ViewChild
} from '@angular/core';
import { Message } from '../../../../../imports/models/message';
import { AuthService } from '../../auth/auth.service';
import User = Meteor.User;

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.component.html',
  styleUrls: ['messages.component.scss']
})
export class MessagesComponent implements OnChanges, AfterViewChecked {
  @Input() public messages: Array<Message>;
  @Input() public users: Array<User>;
  public usersDictionary = {};
  @ViewChild('container') public container: ElementRef;

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

  public ngAfterViewChecked() {
    this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
  }
}