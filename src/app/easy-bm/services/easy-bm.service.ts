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
  });
  folders: any;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
    this.getFolders().subscribe(folders => (this.folders = folders));
  }

  public getFolders(): Observable<Folder> {
    return this.http.get<APIResponse<Folder[]>>(environment.apis.bookmarks + 'folder', { headers: this.header })
      .pipe(
        map(apiResponse => apiResponse.data ?? <Array<Folder>>[]),
        map(folders => this.createTree(folders))
      );
  };

  private createTree(Folders: Array<Folder>): Folder {
    let root: Folder | undefined = undefined;
    let buffer: Map<Number, Folder> = new Map<Number, Folder>();
    for (const [key, value] of this.folders) {
      buffer.set(this.folders.id, this.folders);
    }
  }
    return new Folder();
  }
}

