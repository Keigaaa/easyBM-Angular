import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/security/services/auth.service';
import { EasyBMService } from '../../services/easy-bm.service';

@Component({
  selector: 'ns-folder-container',
  templateUrl: './folder-container.component.html',
  styleUrls: ['./folder-container.component.css']
})
export class FolderContainerComponent {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService, public easyBmService: EasyBMService) {
  }

}
