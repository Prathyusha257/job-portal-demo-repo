import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { getProfileStrengthPercent } from '../data/profile';
import { getInitials } from '../data/initials';
import { getCurrentEmail } from '../data/auth';
import { defaultProfile, getProfile, saveProfile as persistProfile } from '../data/profile-store';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {

  profile = defaultProfile('', '');

  showSaveSuccess = false;
  private saveSuccessTimeout: any;

get profileStrengthPercent(): number {
  return getProfileStrengthPercent(this.profile);
}

initials(name: string): string {
  return getInitials(name);
}

onResumeSelected(event: Event) {
  const input = event.target as HTMLInputElement;

  if (input.files && input.files.length > 0) {
    this.profile.resumeName = input.files[0].name;
  }
}

 saveProfile() {
  const email = getCurrentEmail();

  if (!email) {
    return;
  }

  persistProfile(email, this.profile);

  this.showSaveSuccess = true;

  clearTimeout(this.saveSuccessTimeout);
  this.saveSuccessTimeout = setTimeout(() => {
    this.showSaveSuccess = false;
  }, 3000);
}

ngOnInit() {
  const email = getCurrentEmail();

  if (!email) {
    return;
  }

  const savedProfile = getProfile(email);

  if (savedProfile) {
    this.profile = savedProfile;
  }
}

}
