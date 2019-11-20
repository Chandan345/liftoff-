import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private authService: AuthService,private firestore: AngularFirestore) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name : new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phoneNumber: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      radioData: new FormControl('',Validators.required),
    })
  }

  onSignUp() {  
    this.authService.signUpUser(this.signUpForm.value).then((res)=>{
      this.firestore
            .collection("users")
            .add(this.signUpForm.value)
            .then(res => {
              this.signUpForm.reset();
            });
            
    });
  }

}
