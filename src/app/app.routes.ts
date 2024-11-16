import { Routes } from '@angular/router';
import { HomeComponent } from './google-drive/home/home.component';
import { StarredComponent } from './google-drive/starred/starred.component';
import { SharedComponent } from './google-drive/shared/shared.component';
import { FilesComponent } from './google-drive/files/files.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'starred', component: StarredComponent },
  { path: 'shared', component: SharedComponent },
  { path: 'files', component: FilesComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Optional: Redirect to 'home' by default
  { path: '**', redirectTo: '/home' }, // Optional: Handle undefined routes
];
