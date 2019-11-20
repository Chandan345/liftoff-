import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routes: Routes = [
  {path: '',
  component: PagesComponent,
  children:[
    { path: 'dashboard', component: DashboardComponent },
    { path: '404', component: PageNotFoundComponent },
    {path: '**', redirectTo:'404'}
  ]
}
];

export const pagesRouting: ModuleWithProviders = RouterModule.forChild(routes);