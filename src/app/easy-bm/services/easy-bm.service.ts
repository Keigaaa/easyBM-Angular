import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { APIResponse } from 'src/app/data-models/api-response-model';
import { Folder } from 'src/app/data-models/folder-model';
import { AuthService } from 'src/app/security/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class EasyBMService {
  //Liste des folders Observable subject

  header = new HttpHeaders({
    "Authorization": `Bearer ${this.authService.token!}`
  })

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }


  public GetFolders(): Observable<Folder[]> {
    return this.http.get<APIResponse<Folder[]>>(environment.apis.bookmarks + 'folder', { headers: this.header })
      .pipe(
        map(apiResponse => apiResponse.data ?? <Array<Folder>>[]),
      );
  };
}
