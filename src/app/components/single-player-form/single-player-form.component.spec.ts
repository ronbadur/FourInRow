import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlayerFormComponent } from './single-player-form.component';

describe('SinglePlayerFormComponent', () => {
  let component: SinglePlayerFormComponent;
  let fixture: ComponentFixture<SinglePlayerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePlayerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
