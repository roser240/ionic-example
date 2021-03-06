import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ButtonPage } from '../pages/home/button/button';
import { ListPage } from '../pages/home/list/list';
import { CardPage } from '../pages/home/card/card';
import { InputPage } from '../pages/home/input/input';
import { TogglePage } from '../pages/home/toggle/toggle';
import { RangePage } from '../pages/home/range/range';
import { SelectPage } from '../pages/home/select/select';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ButtonPage,
    ListPage,
    CardPage,
    InputPage,
    TogglePage,
    RangePage,
    SelectPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ButtonPage,
    ListPage,
    CardPage,
    InputPage,
    TogglePage,
    RangePage,
    SelectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
