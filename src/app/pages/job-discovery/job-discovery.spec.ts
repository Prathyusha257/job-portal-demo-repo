import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobDiscovery } from './job-discovery';

describe('JobDiscovery', () => {
  let component: JobDiscovery;
  let fixture: ComponentFixture<JobDiscovery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDiscovery],
    }).compileComponents();

    fixture = TestBed.createComponent(JobDiscovery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
