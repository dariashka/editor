import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MeteorObservable } from 'meteor-rxjs';
import { Observable } from 'rxjs/Observable';
import { Messages } from '../../../../../imports/collections/messages';
import { Users } from '../../../../../imports/collections/users';
import { Message } from '../../../../../imports/models/message';
import { AuthService } from '../../auth/auth.service';
import User = Meteor.User;

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.scss']
})
export class ChatComponent implements OnChanges, AfterViewInit {
  private messages: Observable<Array<Message>>;
  @Input() public docId: string;
  @ViewChild('newMessage') public newMessage;

  public users: Array<User>;
  // public get messages(): Array<Message> {
  //   return this._messages;
  // }
  //
  // @Input()
  // public set messages(list: Array<Message>) {
  //   this._messages = (list || []).sort(
  //     (a: Message, b: Message) => moment(a.date).isBefore(b.date)
  //       ? -1
  //       : 1);
  // }

  constructor(
    private _auth: AuthService,
    private _snack: MatSnackBar
  ) {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['docId'] && this.docId) {
      MeteorObservable.subscribe('messagesByDocument')
        .subscribe(() => {
          this.messages = <Observable<Message[]>>Messages.find(
            { docId: this.docId },
            { sort: { date: 1 } }
          );
        });

      const users = Meteor.subscribe('userList');
      Tracker.autorun(() => {
        this.users = Users.find({}).fetch();
      });
    }
  }

  public ngAfterViewInit() {
    const _sendByButtons$ = Observable.fromEvent(
      this.newMessage.nativeElement, 'keypress'
    );

    _sendByButtons$.subscribe((event) => {
      if (event['ctrlKey'] && event['keyCode'] === 13) {
        this.sendMessage();
      }
    });

  }

  public sendMessage() {
    Meteor.call(
      'sendMessage',
      this.docId,
      this.newMessage.nativeElement.value,
      this._auth.currentUserId,
      (err, res) => {
        if (err) {
          this._snack.open(err.reason);
        } else if (res) {
          this.newMessage.nativeElement.value = '';
        }
      }
    );
  }
}
