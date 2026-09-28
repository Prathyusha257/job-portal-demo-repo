import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { getInitials } from '../data/initials';
import { getProfileStrengthPercent } from '../data/profile';
import { getCurrentEmail, logout } from '../data/auth';
import { getProfile } from '../data/profile-store';
import { getSavedJobs, setSavedJobs } from '../data/saved-jobs-store';

@Component({
  selector: 'app-saved-jobs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './saved-jobs.html',
  styleUrl: './saved-jobs.css'
})
export class SavedJobs implements OnInit {

  constructor(private router: Router) {}

  profile: any = {};
  savedJobs: any[] = [];

  ngOnInit() {

    const email = getCurrentEmail();

    if (email) {
      this.profile = getProfile(email) || this.profile;
      this.savedJobs = getSavedJobs(email);
    }

  }

  initials(name: string): string {
    return getInitials(name);
  }

  get profileStrengthPercent(): number {
    return getProfileStrengthPercent(this.profile);
  }

  logOut() {
    logout();
    this.router.navigate(['/login']);
  }

  removeJob(job: any) {

    const email = getCurrentEmail();

    if (!email) {
      return;
    }

    this.savedJobs = this.savedJobs.filter(
      savedJob => savedJob.title !== job.title
    );

    setSavedJobs(email, this.savedJobs);

  }

}
