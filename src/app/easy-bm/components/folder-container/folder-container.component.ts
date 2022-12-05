import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/security/services/auth.service';
import { EasyBMService } from '../../services/easy-bm.service';
import { Folder } from 'src/app/data-models/folder-model';

@Component({
  selector: 'ns-folder-container',
  templateUrl: './folder-container.component.html',
  styleUrls: ['./folder-container.component.css']
})
export class FolderContainerComponent {

  folders = this.easyBmService.getFolders();

  constructor(private http: HttpClient, private router: Router, private authService: AuthService, public easyBmService: EasyBMService) {
  }

  /**
   * {
   *   id: 1,
   *   name: root,
   *   children: [
   *   {
   *      id: 3,
   *      name: Platon,
   *      children: []
   *   }]
   * }
   */
}
