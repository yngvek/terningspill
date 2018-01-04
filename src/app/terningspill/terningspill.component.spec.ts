import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerningspillComponent } from './terningspill.component';

describe('TerningspillComponent', () => {
  let component: TerningspillComponent;
  let fixture: ComponentFixture<TerningspillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerningspillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerningspillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
