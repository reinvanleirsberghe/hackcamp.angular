import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {HttpModule} from '@angular/http';
import {BackdropUrl, BackdropUrl780, Categories, PictureCdnUrl, PictureOriginalUrl, ServerUrl} from './di';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {HomeModule} from './home/home.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    AuthModule,
    SharedModule,
  ],
  providers: [
    ServerUrl,
    PictureCdnUrl,
    BackdropUrl,
    BackdropUrl780,
    PictureOriginalUrl,
    Categories,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
