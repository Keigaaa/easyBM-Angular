import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { User, Key, Power, PlusCircle, FolderPlus, FilePlus, Tag, Search, Folder, Bookmark, XCircle } from 'angular-feather/icons';
const icons = {
  User,
  Key,
  Power,
  PlusCircle,
  FolderPlus,
  FilePlus,
  Tag,
  Search,
  Folder,
  Bookmark,
  XCircle
};


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
