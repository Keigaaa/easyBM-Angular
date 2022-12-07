import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderContainerComponent } from './item-container.component';

describe('FolderContainerComponent', () => {
  let component: FolderContainerComponent;
  let fixture: ComponentFixture<FolderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FolderContainerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FolderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
