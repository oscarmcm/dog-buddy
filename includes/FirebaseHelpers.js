import * as Firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {FBLoginManager} from 'react-native-facebook-login';
import {GoogleSignin} from 'react-native-google-signin';

export default class FirebaseHelpers {

    /**
     * Initialises Firebase
     */
     static initialise() {
        Firebase.initializeApp({
            apiKey: "AIzaSyDDWudMQduFSO8_LW46z0qQaK3K18NFpc0",
            authDomain: "dog-buddy-a214d.firebaseapp.com",
            databaseURL: "https://dog-buddy-a214d.firebaseio.com",
            projectId: "dog-buddy-a214d",
            storageBucket: "dog-buddy-a214d.appspot.com",
            messagingSenderId: "197049431754"
        });
    }

    /**
     * Log in user with Firebase
     */
    static logIn(method, params) {
        return new Promise( (resolve, reject)  => {
            switch(method) {
              case 'email':
                Firebase.auth().signInWithEmailAndPassword(params.email, params.password)
                .then( user => {
                  resolve(user);
                })
                .catch( error => {
                  reject(Error(error.toString()));
                });
                break;
              case 'facebook':
              case 'google':
                console.log(method);
                Firebase.auth().signInWithCredential(params.credential)
                .then( user => { 
                  console.log(user);
                  resolve(user);
                })
                .catch( error => { 
                  reject(Error(error.toString()));
                });
                break;
              default:
                reject(Error('Not valid login method'));
            }
        });
    }

    /**
     * Gets the current logged in user if exist
     * Usage mode: 'user = FirebaseHelpers.currentUser()'
     */
    static currentUser() {
        return new Promise(function (resolve, reject) {
            Firebase.auth().onAuthStateChanged(function (user) {
              if (user) {
                resolve(user);
              } else {
                reject(Error("No current user"));
              }
            });
        });
    }

    static logOut() {
        Firebase.auth().signOut().then( () => {
            FBLoginManager.logout( (data) => {
              console.log(data);
            }); // Log Out from FB
            GoogleSignin.signOut(); // Log out from Google
            Actions.Login();
        }, function(error) {
          console.log(error);
        });
    }
}
