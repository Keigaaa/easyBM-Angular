import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bookmark } from 'src/app/data-models/bookmark-model';
import { Folder } from 'src/app/data-models/folder-model';
import { AuthService } from 'src/app/security/services/auth.service';
import { EasyBMService } from '../../services/easy-bm.service';

@Component({
  selector: 'ns-bookmark-container',
  templateUrl: './bookmark-container.component.html',
  styleUrls: ['./bookmark-container.component.css']
})
export class BookmarkContainerComponent {

  protected root: Folder | undefined;
  protected bookmarks: Bookmark[] | undefined;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService, public easyBmService: EasyBMService) {

  }

  public getBookmarksInRoot(Root: Folder) {
    this.easyBmService.getBookmarks(this.root!).subscribe({
      next: (bookmark) => {
        this.bookmarks = bookmark;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
