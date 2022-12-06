import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/security/services/auth.service';
import { EasyBMService } from '../../services/easy-bm.service';
import { Folder } from 'src/app/data-models/folder-model';
import { Observable } from 'rxjs';
import { Bookmark } from 'src/app/data-models/bookmark-model';
import { BookmarkContainerComponent } from '../bookmark-container/bookmark-container.component';

@Component({
  selector: 'ns-folder-container',
  templateUrl: './folder-container.component.html',
  styleUrls: ['./folder-container.component.css']
})

export class FolderContainerComponent {

  @Input() folder: Folder | undefined;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService, public easyBmService: EasyBMService) {

  }
}
