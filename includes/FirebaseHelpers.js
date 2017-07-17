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
