import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SideMenuComponent } from './profile/side-menu/side-menu.component';
import { CoverComponent } from './profile/cover/cover.component';
import { PostsComponent } from './profile/posts/posts.component';
import { AdsComponent } from './profile/ads/ads.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SideMenuComponent,
    CoverComponent,
    PostsComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
