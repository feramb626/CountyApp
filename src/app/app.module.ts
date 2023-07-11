import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharModule } from './shared/shar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
