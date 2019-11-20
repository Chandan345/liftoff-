import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardService } from './services/dashboard.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // HttpClient,
    
    // PagesModule
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule // Only required for storage features
  ],
  providers: [AuthService,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
