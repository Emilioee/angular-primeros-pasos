import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { counterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/hero.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    counterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
