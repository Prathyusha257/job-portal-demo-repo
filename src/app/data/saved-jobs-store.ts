const SAVED_JOBS_KEY = 'careerGridSavedJobs';

function getAllSavedJobs(): Record<string, any[]> {
  const raw = localStorage.getItem(SAVED_JOBS_KEY);
  return raw ? JSON.parse(raw) : {};
}

function saveAllSavedJobs(map: Record<string, any[]>) {
  localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(map));
}

export function getSavedJobs(email: string): any[] {
  return getAllSavedJobs()[email.trim().toLowerCase()] || [];
}

export function setSavedJobs(email: string, jobs: any[]) {
  const map = getAllSavedJobs();
  map[email.trim().toLowerCase()] = jobs;
  saveAllSavedJobs(map);
}
