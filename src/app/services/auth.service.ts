// declare var firebase: any;
import * as firebase from 'firebase';
import { environment } from '../../environments/environment';
export class AuthService {
constructor() {    
    firebase.initializeApp(environment.firebaseConfig);
}

    signUpUser(user){
        // console.log(firebase,'firebase')
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }

    signInUser(user){
        return firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
}