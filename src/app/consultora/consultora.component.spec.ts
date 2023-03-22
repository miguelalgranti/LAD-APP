import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoraComponent } from './consultora.component';

describe('ConsultoraComponent', () => {
  let component: ConsultoraComponent;
  let fixture: ComponentFixture<ConsultoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
