
import { NgModule } from '@angular/core';
import { pagesRouting } from './pages.routing';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [  
    PagesComponent, DashboardComponent, HeaderComponent, PageNotFoundComponent,
  ],
  imports: [
    pagesRouting,
    CommonModule
  ],
})
export class PagesModule { }
