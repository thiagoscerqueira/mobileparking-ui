import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaJobsComponent } from './pesquisa-jobs.component';

describe('PesquisaJobsComponent', () => {
  let component: PesquisaJobsComponent;
  let fixture: ComponentFixture<PesquisaJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
