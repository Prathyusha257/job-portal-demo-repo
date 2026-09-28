import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { JobDetails } from './pages/job-details/job-details';
import { SavedJobs } from './saved-jobs/saved-jobs';
import { Pipeline } from './pipeline/pipeline';
import { Register } from './register/register';
import { Login } from './login/login';
import { authGuard, registerGuard, loginGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },

  {
    path: 'register',
    component: Register,
    canActivate: [registerGuard]
  },

  {
    path: 'login',
    component: Login,
    canActivate: [loginGuard]
  },

  {
    path: 'jobs',
    loadComponent: () =>
      import('./pages/job-discovery/job-discovery')
        .then(m => m.JobDiscovery),
    canActivate: [authGuard]
  },

  {
  path: 'profile',
  component: Profile,
  canActivate: [authGuard]
  },

{
  path: 'job-details/:id',
  component: JobDetails,
  canActivate: [authGuard]
},

{
  path: 'saved-jobs',
  component: SavedJobs,
  canActivate: [authGuard]
},

{
  path: 'pipeline',
  component: Pipeline,
  canActivate: [authGuard]
}

];
