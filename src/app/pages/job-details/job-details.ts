import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JOBS, getProfileMatch } from '../../data/jobs';
import { getCurrentEmail } from '../../data/auth';
import { getProfile } from '../../data/profile-store';
import { getSavedJobs, setSavedJobs } from '../../data/saved-jobs-store';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './job-details.html',
  styleUrl: './job-details.css'
})
export class JobDetails implements OnInit {

  job: any;

  profile: any = {};
  savedJobs: any[] = [];

  currentStep: number = 1;

  fullName: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.job = JOBS.find(job => job.id === id);

    const currentEmail = getCurrentEmail();

    if (currentEmail) {
      this.profile = getProfile(currentEmail) || this.profile;
      this.savedJobs = getSavedJobs(currentEmail);
    }

  }

  get matchPercent(): number {

    if (!this.job) {
      return 0;
    }

    return getProfileMatch(this.job, this.profile);
  }

  toggleSave() {

    const currentEmail = getCurrentEmail();

    if (!currentEmail || !this.job) {
      return;
    }

    const alreadySaved = this.isSaved();

    if (alreadySaved) {

      this.savedJobs = this.savedJobs.filter(
        savedJob => savedJob.title !== this.job.title
      );

    } else {

      this.savedJobs = [
        ...this.savedJobs,
        this.job
      ];

    }

    setSavedJobs(currentEmail, this.savedJobs);
  }

  isSaved(): boolean {

    if (!this.job) {
      return false;
    }

    return this.savedJobs.some(
      savedJob => savedJob.title === this.job.title
    );

  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

startApplication() {
  this.currentStep = 1;

  setTimeout(() => {
    document.querySelector('.application-card')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

  submitApplication() {
    alert('Application submitted successfully!');
    this.currentStep = 4;
  }

}
