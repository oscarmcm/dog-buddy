import * as Firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {FBLoginManager} from 'react-native-facebook-login';
import {GoogleSignin} from 'react-native-google-signin';
import {AsyncStorage} from 'react-native'

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

    static storeUser(user, method) {
      user_object = {
        name:  user.displayName,
        email: user.email,
        photo: user.photoURL,
        login_method: method,
        firebase_id: user.uid,
      }

      try {
        AsyncStorage.setItem('user', JSON.stringify(user_object));
        return user_object;
      } catch (error) {
        console.log('Error saving data: ' + error);
      }
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
                  resolve(this.storeUser(user, method));
                })
                .catch( error => {
                  reject(Error(error.toString()));
                });
                break;
              case 'facebook.com':
              case 'google.com':
                console.log(method);
                Firebase.auth().signInWithCredential(params.credential)
                .then( user => {
                  resolve(this.storeUser(user, method));
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
            try {
              const user = AsyncStorage.getItem('user');
              if(user) {
                resolve(user);
              }
              else {
                Firebase.auth().onAuthStateChanged(function (user) {
                  if (user) {
                    resolve(this.storeUser(user, 'email'));
                  } else {
                    reject(Error('No current user'));
                  }
                });
              }
            } catch (e) {
              reject(Error(e));
            }
        });
    }

    static logOut() {
        // Deleting user from realm
        Firebase.auth().signOut().then( () => {
            FBLoginManager.logout( (data) => {
              console.log(data);
            }); // Log Out from FB
            GoogleSignin.signOut(); // Log out from Google
            AsyncStorage.removeItem('user');
            Actions.Login();
        }, function(error) {
          console.log(error);
        });
    }
}
