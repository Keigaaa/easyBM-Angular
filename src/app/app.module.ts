import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookmarksModule } from './bookmarks/bookmarks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BookmarksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
