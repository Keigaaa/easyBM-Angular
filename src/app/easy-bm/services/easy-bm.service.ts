import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { bufferCount, filter, map, Observable } from 'rxjs';
import { APIResponse } from 'src/app/data-models/api-response-model';
import { Bookmark } from 'src/app/data-models/bookmark-model';
import { Folder } from 'src/app/data-models/folder-model';
import { AuthService } from 'src/app/security/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class EasyBMService {

  header = new HttpHeaders({
    "Authorization": `Bearer ${this.authService.token!}`
  });

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {

  }

  /**
   * Observable that retrieves all the user's folders connected
   * @returns <Array<Folder>>[]
   */
  public getFolders(): Observable<Folder> {
    return this.http.get<APIResponse<Folder[]>>(environment.apis.bookmarks + 'folder', { headers: this.header })
      .pipe(
        map(apiResponse => apiResponse.data ?? <Array<Folder>>[]),
        map(folders => this.createTree(folders)!)
      );
  };

  /**
   * Observable that retrieves all the bookmarks contained in the folder sent as a parameter
   * @param folder 
   * @returns <Array<Bookmark>>[]
   */
  public getBookmarks(folder: Folder): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(environment.apis.bookmarks + folder.id + '/content/bookmark', { headers: this.header });
  };

  /**
   * Create a tree with all folders sorted by parent and child using a buffer which is a map
   * @param folders 
   * @returns  Folder | undefined
   */
  private createTree(folders: Array<Folder>): Folder | undefined {
    // Declares the buffer and root variables
    let root: Folder | undefined = undefined;
    let buffer: Map<Number, Folder> = new Map<Number, Folder>();
    // Browse the folder parameter sent in the function t obuild the tree
    for (let folder of folders) {
      // Create a currentFolder variable that is equal to the currently browsed and either creates a child
      let currentFolder = { ...folder, children: buffer.get(folder.id!)?.children ?? [] };
      // Check if currrentFolder is the root
      if (currentFolder.idParent == null) root = currentFolder;
      // If it is the root , assign its id
      buffer.set(folder.id!, currentFolder);
      // If the currentFolder is not the root
      if (folder.idParent != null) {
        // Create a parent with the currentFolder id
        let parent = buffer.get(folder.idParent)
        // If the parent is know add his child
        if (parent != undefined) {
          parent.children.push(currentFolder)
        }
        else {
          // Otherwise creates a child with no parent defined
          buffer.set(currentFolder.idParent!, { children: [currentFolder] })
        }
      }
    }
    // Returns the root folder containing the entire tree
    return root;
  }

  public deleteFolder(folder: Folder | Bookmark | undefined) {
    return this.http.delete<Folder>(environment.apis.bookmarks + 'folder/' + folder?.id, { headers: this.header }).subscribe(data => {
      console.log(data);
      window.location.reload();
    });
  }

  public deleteBookmark(bookmark: Folder | Bookmark | undefined) {
    return this.http.delete<Folder>(environment.apis.bookmarks + 'bookmark/' + bookmark?.id, { headers: this.header }).subscribe(data => {
      console.log(data);
      window.location.reload();
    });
  }
}