import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app.routing.module';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import {BackdropUrl, BackdropUrl780, Categories, PictureCdnUrl, PictureOriginalUrl, ServerUrl} from './di';
import {HttpModule} from '@angular/http';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {HomeModule} from './home/home.module';
import {AuthModule} from './auth/auth.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        HomeModule,
        AuthModule,
        SharedModule,
        CoreModule
      ],
      providers: [
        ServerUrl,
        PictureCdnUrl,
        BackdropUrl,
        BackdropUrl780,
        PictureOriginalUrl,
        Categories,
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as logo 'app'`, async(() => {
    expect(component.logo).toEqual('../assets/images/hackflix_logo.svg');
  }));

});
