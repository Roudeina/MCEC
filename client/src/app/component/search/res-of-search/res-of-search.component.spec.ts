import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResOfSearchComponent } from './res-of-search.component';

describe('ResOfSearchComponent', () => {
  let component: ResOfSearchComponent;
  let fixture: ComponentFixture<ResOfSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResOfSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResOfSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
