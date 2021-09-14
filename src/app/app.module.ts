import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataServicesModule } from './data/data-services.module';
import { AuxiliaresComponent } from './views/auxiliares.component';


@NgModule({
  declarations: [
    AppComponent,
    AuxiliaresComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataServicesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
