import * as firebase from 'firebase';

class Firebase {

    /**
     * Initialises Firebase
     */
     static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyDDWudMQduFSO8_LW46z0qQaK3K18NFpc0",
            authDomain: "dog-buddy-a214d.firebaseapp.com",
            databaseURL: "https://dog-buddy-a214d.firebaseio.com",
            projectId: "dog-buddy-a214d",
            storageBucket: "dog-buddy-a214d.appspot.com",
            messagingSenderId: "197049431754"
        });
    }

}

module.exports = Firebase;