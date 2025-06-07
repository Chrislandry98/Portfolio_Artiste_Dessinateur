import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeportfolioComponent } from './homeportfolio.component';

describe('HomeportfolioComponent', () => {
  let component: HomeportfolioComponent;
  let fixture: ComponentFixture<HomeportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeportfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
