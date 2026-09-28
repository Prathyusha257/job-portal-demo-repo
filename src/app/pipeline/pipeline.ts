import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { JOBS, getProfileMatch } from '../data/jobs';
import { getProfileChecklist, getProfileStrengthPercent } from '../data/profile';
import { getInitials } from '../data/initials';
import { getCurrentEmail, logout } from '../data/auth';
import { getProfile } from '../data/profile-store';
import { getSavedJobs, setSavedJobs } from '../data/saved-jobs-store';

const STAGE_META = [
  { label: 'Applied', updated: 'Updated 6 days ago', progress: 1 },
  { label: 'Screening', updated: 'Updated 3 days ago', progress: 2 },
  { label: 'Interview', updated: 'Updated yesterday', progress: 3 },
  { label: 'Offer', updated: 'Updated today', progress: 4 }
];

@Component({
  selector: 'app-pipeline',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pipeline.html',
  styleUrl: './pipeline.css'
})
export class Pipeline implements OnInit {

  constructor(private router: Router) {}

  profile: any = {};
  savedJobs: any[] = [];

  pipelineStages: any[] = [];
  recommendedJobs: any[] = [];

  ngOnInit() {
    const email = getCurrentEmail();

    if (email) {
      this.profile = getProfile(email) || this.profile;
      this.savedJobs = getSavedJobs(email);
    }

    const rankedJobs = JOBS
      .map(job => ({ job, score: getProfileMatch(job, this.profile) }))
      .sort((a, b) => b.score - a.score);

    this.pipelineStages = STAGE_META.map((stage, index) => ({
      label: stage.label,
      applications: [{
        title: rankedJobs[index].job.title,
        company: rankedJobs[index].job.company,
        updated: stage.updated,
        progress: stage.progress
      }]
    }));

    this.recommendedJobs = rankedJobs
      .slice(STAGE_META.length, STAGE_META.length + 3)
      .map(({ job, score }) => ({ ...job, match: score }));
  }

  get totalApplications(): number {
    return this.pipelineStages.reduce(
      (total, stage) => total + stage.applications.length,
      0
    );
  }

  get profileChecklist() {
    return getProfileChecklist(this.profile);
  }

  get profileStrengthPercent(): number {
    return getProfileStrengthPercent(this.profile);
  }

  initials(name: string): string {
    return getInitials(name);
  }

  logOut() {
    logout();
    this.router.navigate(['/login']);
  }

  toggleSave(job: any) {

    const email = getCurrentEmail();

    if (!email) {
      return;
    }

    const alreadySaved = this.savedJobs.some(
      savedJob => savedJob.title === job.title
    );

    if (alreadySaved) {

      this.savedJobs = this.savedJobs.filter(
        savedJob => savedJob.title !== job.title
      );

    } else {

      this.savedJobs = [
        ...this.savedJobs,
        job
      ];

    }

    setSavedJobs(email, this.savedJobs);
  }

  isSaved(job: any): boolean {

    return this.savedJobs.some(
      savedJob => savedJob.title === job.title
    );

  }

}
