import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsService } from './sports.service';
import { SportListComponent } from './sport-list/sport-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        SportListComponent
    ],
    providers: [SportsService],
    bootstrap: [SportListComponent]
})
export class SportModule { }