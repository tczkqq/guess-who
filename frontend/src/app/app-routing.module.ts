import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { HomeComponent } from '@pages/home/home.component';
import { BrowseComponent } from '@pages/browse/browse.component';
import { SettingsComponent } from '@pages/settings/settings.component';
import { DonateComponent } from '@pages/donate/donate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'browse',
    component: BrowseComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'donate',
    component: DonateComponent,
  },
  {
    path: 'pageNotFound',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/pageNotFound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
