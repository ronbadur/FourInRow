import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplePlayersFormComponent } from './multiple-players-form.component';

describe('MultiplePlayersFormComponent', () => {
  let component: MultiplePlayersFormComponent;
  let fixture: ComponentFixture<MultiplePlayersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplePlayersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplePlayersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
