import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbTrailComponent } from './breadcrumb-trail.component';

describe('BreadcrumbTrailComponent', () => {
  let component: BreadcrumbTrailComponent;
  let fixture: ComponentFixture<BreadcrumbTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbTrailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
