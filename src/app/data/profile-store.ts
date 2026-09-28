const PROFILES_KEY = 'careerGridProfiles';

export function defaultProfile(name: string, email: string) {
  return {
    name,
    email,
    location: '',
    skills: '',
    experience: '',
    jobType: '',
    salary: '',
    workPreference: '',
    workHistory: '',
    resumeName: ''
  };
}

function getAllProfiles(): Record<string, any> {
  const raw = localStorage.getItem(PROFILES_KEY);
  return raw ? JSON.parse(raw) : {};
}

function saveAllProfiles(profiles: Record<string, any>) {
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
}

export function getProfile(email: string): any | null {
  return getAllProfiles()[email.trim().toLowerCase()] || null;
}

export function saveProfile(email: string, profile: any) {
  const profiles = getAllProfiles();
  profiles[email.trim().toLowerCase()] = profile;
  saveAllProfiles(profiles);
}
