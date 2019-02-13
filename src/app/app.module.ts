import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CompItComponent } from './comp-it/comp-it.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment.prod';

const config = {
  apiKey: "AIzaSyCXFgLAKpY2f4-RRHBLN4IMIWaqlO7KBWQ",
  authDomain: "techxtreme-e1387.firebaseapp.com",
  databaseURL: "https://techxtreme-e1387.firebaseio.com",
  projectId: "techxtreme-e1387",
  storageBucket: "",
  messagingSenderId: "1019898703836"
};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CompItComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule //storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
