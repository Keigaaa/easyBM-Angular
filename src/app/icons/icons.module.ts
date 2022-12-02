import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { User, Key, Power, PlusCircle, FolderPlus, FilePlus, Tag, Search, Folder } from 'angular-feather/icons';
const icons = {
  User,
  Key,
  Power,
  PlusCircle,
  FolderPlus,
  FilePlus,
  Tag,
  Search,
  Folder
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
