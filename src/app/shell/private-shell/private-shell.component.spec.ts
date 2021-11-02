import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateShellComponent } from './private-shell.component';

describe('PrivateShellComponent', () => {
  let component: PrivateShellComponent;
  let fixture: ComponentFixture<PrivateShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
