import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Folder } from 'src/app/data-models/folder-model';
import { Observable } from 'rxjs';
import { Bookmark } from 'src/app/data-models/bookmark-model';
import { __values } from 'tslib';
import { PathService } from '../../services/path.service';
import { EasyBMService } from '../../services/easy-bm.service';

export enum ItemContainerType {
  Folder,
  Bookmark
}
@Component({
  selector: 'ns-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  private _item: Folder | Bookmark | undefined;
  public showButton: boolean = false;

  @Output() public onSelectFolder = new EventEmitter<Folder>();

  @Input()
  public set item(value: Folder | Bookmark | undefined) {
    this._item = value;
    this.checkType();
  }
  public get item(): Folder | Bookmark | undefined {
    return this._item;
  }

  type: ItemContainerType | undefined = undefined;
  constructor(public easyBmService: EasyBMService, public pathService: PathService) {

  }
  ngOnInit(): void {

  }

  public checkType() {

    this.type = (this.item && (<any>this.item).children != undefined) ? ItemContainerType.Folder : ItemContainerType.Bookmark;
  }
  public isFolder() {
    return this.type == ItemContainerType.Folder;
  }
  public isBookmark() {
    return this.type == ItemContainerType.Bookmark;
  }

  public handleSelectFolder() {
    this.onSelectFolder.emit(this.item as Folder);
  }
}
