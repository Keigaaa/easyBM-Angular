import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bookmark } from 'src/app/data-models/bookmark-model';
import { Folder } from 'src/app/data-models/folder-model';
import { EasyBMService } from '../../services/easy-bm.service';

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  protected bookmarks: Bookmark[] = [];
  protected root: Folder | undefined;
  protected parent: Folder | undefined;
  private _folderSelected: Folder | undefined;
  /// path des folders
  protected get folderSelected(): Folder | undefined {
    return this._folderSelected;
  }
  protected set folderSelected(value: Folder | undefined) {
    //refresh bookMarks
    this.bookmarks = [];
    if (value != undefined)
      this.refreshBookmarks(value);
    //affecter folderselected
    this._folderSelected = value;
  }

  constructor(public easyBmService: EasyBMService) {
    this.easyBmService.getFolders().subscribe({
      next: (root) => {
        this.root = root;
        this.folderSelected = this.root;
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

  selectFolder(folder: Folder) {
    this.parent = this.folderSelected;
    this.folderSelected = folder;
  }
}
