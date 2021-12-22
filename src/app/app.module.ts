import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { GithubService } from './github.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
