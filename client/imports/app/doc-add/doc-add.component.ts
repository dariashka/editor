import { Component } from '@angular/core';

import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'doc-add',
  templateUrl: 'doc-add.component.html'
})
export class DocumentComponent {
  public name: string;
  public content: string;

  public createDocument() {
    Meteor.call('createDocument', this.name, this.content);
    this.name = null;
    this.content = null;
  }
}
