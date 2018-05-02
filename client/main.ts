import './imports/polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './imports/app/app.module';

import 'hammerjs';
Meteor.startup(() => {

  if (Meteor.isProduction) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule);

});
