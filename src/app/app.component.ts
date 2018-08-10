import { Component } from '@angular/core';
import * as firebase from 'firebase';
// decorateur
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBS91ZV8Qrnx1rHXZETlp1vFqiLdgS3ruk",
      authDomain: "bookshub-4a9a9.firebaseapp.com",
      databaseURL: "https://bookshub-4a9a9.firebaseio.com",
      projectId: "bookshub-4a9a9",
      storageBucket: "bookshub-4a9a9.appspot.com",
      messagingSenderId: "60286217244"
    };
    firebase.initializeApp(config);
  }
}
