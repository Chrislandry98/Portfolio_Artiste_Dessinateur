import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeinteractionComponent } from './homeinteraction.component';

describe('HomeinteractionComponent', () => {
  let component: HomeinteractionComponent;
  let fixture: ComponentFixture<HomeinteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeinteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeinteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
