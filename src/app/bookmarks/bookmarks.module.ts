import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';



@NgModule({
  declarations: [
    BookmarksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookmarksComponent
  ]
})
export class BookmarksModule { }
