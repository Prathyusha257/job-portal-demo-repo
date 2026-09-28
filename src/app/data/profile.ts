export function getProfileChecklist(profile: any) {
  return [
    { label: 'Location', done: !!profile.location },
    { label: 'Skills & tools', done: !!profile.skills },
    { label: 'Experience level', done: !!profile.experience },
    { label: 'Work history', done: !!profile.workHistory },
    { label: 'Resume', done: !!profile.resumeName },
    {
      label: 'Job preferences',
      done: !!profile.jobType && !!profile.salary && !!profile.workPreference
    }
  ];
}

export function getProfileStrengthPercent(profile: any): number {
  const items = getProfileChecklist(profile);
  const doneCount = items.filter(item => item.done).length;

  return Math.round((doneCount / items.length) * 100);
}
