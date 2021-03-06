import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameControlerComponent } from './game-controler/game-controler.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';



@NgModule({
  declarations: [
    AppComponent,
    GameControlerComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
