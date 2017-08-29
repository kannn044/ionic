import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { DetailPageModule } from '../pages/detail/detail.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { SettingPageModule } from '../pages/setting/setting.module';
import { AvatarProvider } from '../providers/avatar/avatar';
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DetailPageModule,
    TabsPageModule,
    DashboardPageModule,
    SettingPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AvatarProvider
  ]
})
export class AppModule {}
