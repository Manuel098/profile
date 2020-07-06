import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTooltipModule, MatCardModule, MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GithubComponent } from './Components/home/github/github.component';

@NgModule({
  declarations: [
    HeaderComponent,
    GithubComponent,
    HomeComponent,
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatTooltipModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
