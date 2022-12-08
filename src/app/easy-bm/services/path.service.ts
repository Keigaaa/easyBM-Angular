import { Injectable, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/data-models/bookmark-model';
import { Folder } from 'src/app/data-models/folder-model';
import { EasyBMService } from './easy-bm.service';

@Injectable({
  providedIn: 'root'
})
export class PathService implements OnInit {
  public bookmarks: Bookmark[] = [];
  public root: Folder | undefined;
  public _folderSelected: Folder | undefined;
  public path: Folder[] = [];

  public get folderSelected(): Folder | undefined {
    return this._folderSelected;
  }

  public set folderSelected(value: Folder | undefined) {
    this.bookmarks = [];
    if (value != undefined) {
      this.refreshBookmarks(value);
      this._folderSelected = value;
    }
  }

  constructor(public easyBmService: EasyBMService) {
    this.easyBmService.getFolders().subscribe({
      next: (root) => {
        this.root = root;
        this.folderSelected = this.root;
        this.path.push(root);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
  }

  public refreshBookmarks(folderSelected: Folder) {
    this.easyBmService.getBookmarks(folderSelected).subscribe({
      next: (bookmarks) => {
        this.bookmarks = bookmarks;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  public selectFolder(folder: Folder) {
    let i = this.path.findIndex(f => f == folder);
    if (i > -1) {
      this.path = this.path.slice(0, i + 1);
    } else {
      this.path.push(folder);
    }
    this.folderSelected = folder;
  }
}
