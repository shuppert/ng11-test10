import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DloaderComponent } from './dloader.component';

describe('DloaderComponent', () => {
  let component: DloaderComponent;
  let fixture: ComponentFixture<DloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DloaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
