import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndBreadcrumbTrailComponent } from './search-and-breadcrumb-trail.component';

describe('SearchAndBreadcrumbTrailComponent', () => {
  let component: SearchAndBreadcrumbTrailComponent;
  let fixture: ComponentFixture<SearchAndBreadcrumbTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndBreadcrumbTrailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAndBreadcrumbTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
