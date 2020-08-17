import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInstrumentDialogComponent } from './create-instument-dialog.component';

describe('CreateIntsrumentDialogComponent', () => {
  let component: CreateInstrumentDialogComponent;
  let fixture: ComponentFixture<CreateInstrumentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInstrumentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInstrumentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
