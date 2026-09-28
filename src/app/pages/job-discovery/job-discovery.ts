import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { JOBS, getProfileMatch } from '../../data/jobs';
import { getInitials } from '../../data/initials';
import { getProfileStrengthPercent } from '../../data/profile';
import { getCurrentEmail, logout } from '../../data/auth';
import { getProfile } from '../../data/profile-store';
import { getSavedJobs, setSavedJobs } from '../../data/saved-jobs-store';

@Component({
  selector: 'app-job-discovery',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './job-discovery.html',
  styleUrl: './job-discovery.css'
})
export class JobDiscovery {

  constructor(private router: Router) {}

  searchText: string = '';
  selectedLocation: string = 'Any location';
  selectedJobTypes: string[] = [];
  selectedExperienceLevels: string[] = [];
  selectedSalary: number = 0;

  profile: any = {};
  savedJobs: any[] = [];

  jobs = JOBS;
  allViewJobs: any[] = [];
  filteredJobs: any[] = [];

  viewMode: 'recommended' | 'all' =
    (localStorage.getItem('careerGridViewMode') as 'recommended' | 'all') || 'recommended';
  sortBy: 'newest' | 'salary-desc' | 'salary-asc' = 'newest';

  currentPage = 1;
  pageSize = 5;


ngOnInit() {
  const email = getCurrentEmail();

  if (email) {
    this.profile = getProfile(email) || this.profile;
    this.savedJobs = getSavedJobs(email);
  }

  this.searchJobs();
}

getProfileMatch(job: any): number {
  return getProfileMatch(job, this.profile);
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

setViewMode(mode: 'recommended' | 'all') {
  this.viewMode = mode;
  localStorage.setItem('careerGridViewMode', mode);
  this.searchJobs();
}

searchJobs() {
  const search = this.searchText.toLowerCase().trim();

  const matchingJobs = this.jobs.filter(job => {

    const matchesSearch =
      !search ||
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.location.toLowerCase().includes(search) ||
      job.skills.some(skill =>
        skill.toLowerCase().includes(search)
      );

    const matchesLocation =
      this.selectedLocation === 'Any location' ||
      job.location.trim().toLowerCase() ===
      this.selectedLocation.trim().toLowerCase();

    const matchesJobType =
      this.selectedJobTypes.length === 0 ||
      this.selectedJobTypes.includes(job.type);

    const matchesExperience =
      this.selectedExperienceLevels.length === 0 ||
      this.selectedExperienceLevels.includes(job.experience);

    const matchesSalary =
      job.minSalary >= this.selectedSalary;

    return matchesSearch &&
      matchesLocation &&
      matchesJobType &&
      matchesExperience &&
      matchesSalary;
  });

  const rankedByMatch = matchingJobs
    .sort((a, b) => this.getProfileMatch(b) - this.getProfileMatch(a));

  this.allViewJobs = this.viewMode === 'recommended'
    ? rankedByMatch.slice(0, 5)
    : this.sortJobs(rankedByMatch);

  this.currentPage = 1;
  this.updatePage();
}

updatePage() {
  const start = (this.currentPage - 1) * this.pageSize;
  this.filteredJobs = this.allViewJobs.slice(start, start + this.pageSize);
}

get totalPages(): number {
  return Math.max(1, Math.ceil(this.allViewJobs.length / this.pageSize));
}

get pageNumbers(): number[] {
  return Array.from({ length: this.totalPages }, (_, i) => i + 1);
}

goToPage(page: number) {
  if (page < 1 || page > this.totalPages) {
    return;
  }

  this.currentPage = page;
  this.updatePage();
}

private jobRecencyDays(job: any): number {
  const match = job.posted.match(/(\d+)\s+(day|week)/);

  if (!match) {
    return Number.MAX_SAFE_INTEGER;
  }

  const value = parseInt(match[1], 10);

  return match[2] === 'week' ? value * 7 : value;
}

private sortJobs(jobs: any[]): any[] {
  const sorted = [...jobs];

  if (this.sortBy === 'newest') {
    sorted.sort((a, b) => this.jobRecencyDays(a) - this.jobRecencyDays(b));
  } else if (this.sortBy === 'salary-desc') {
    sorted.sort((a, b) => b.minSalary - a.minSalary);
  } else if (this.sortBy === 'salary-asc') {
    sorted.sort((a, b) => a.minSalary - b.minSalary);
  }

  return sorted;
}
resetFilters() {
  this.searchText = '';
  this.selectedLocation = 'Any location';
  this.selectedJobTypes = [];
  this.selectedExperienceLevels = [];
  this.selectedSalary = 0;

  this.searchJobs();
}
onJobTypeChange(type: string, event: Event) {

  const checked = (event.target as HTMLInputElement).checked;

  if (checked) {
    this.selectedJobTypes = [
      ...this.selectedJobTypes,
      type
    ];
  } else {
    this.selectedJobTypes =
      this.selectedJobTypes.filter(t => t !== type);
  }

  this.searchJobs();
}
onExperienceChange(level: string, event: Event) {

  const checked = (event.target as HTMLInputElement).checked;

  if (checked) {
    this.selectedExperienceLevels = [
      ...this.selectedExperienceLevels,
      level
    ];
  } else {
    this.selectedExperienceLevels =
      this.selectedExperienceLevels.filter(l => l !== level);
  }

  this.searchJobs();
}
onSalaryChange(event: Event) {

  this.selectedSalary =
    Number((event.target as HTMLInputElement).value);

  this.searchJobs();
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
