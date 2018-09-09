import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SportModule } from './sports/sport.module';
import { AthleteModule } from './athlete/athlete.module';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SportModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    AthleteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
