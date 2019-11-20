import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private authService: AuthService, private router: Router,private firestore: AngularFirestore) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  onSignIn() {
    this.authService.signInUser(this.loginForm.value).then((res:any)=>{   
      sessionStorage.setItem('userMail',res.user.email)   
      this.router.navigate(['/pages/dashboard'])
    });
  }

}
