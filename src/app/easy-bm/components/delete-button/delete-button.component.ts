import { Component, Input } from '@angular/core';
import { Bookmark } from 'src/app/data-models/bookmark-model';
import { Folder } from 'src/app/data-models/folder-model';
import { EasyBMService } from '../../services/easy-bm.service';
import { PathService } from '../../services/path.service';

@Component({
  selector: 'ns-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {
  public folder: Folder | undefined;

  @Input() folderSelected: Folder | Bookmark | undefined;

  constructor(public easyBmService: EasyBMService, public pathService: PathService) {

  }
}
