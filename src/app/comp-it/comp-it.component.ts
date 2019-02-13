import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { firestore } from 'firebase';

@Component({
  selector: 'app-comp-it',
  templateUrl: './comp-it.component.html',
  styleUrls: ['./comp-it.component.css']
})
export class CompItComponent implements OnInit {

  constructor(public auth:AuthService) {
   }

  ngOnInit() {
    
  }

  scroll(el){
    el.scrollIntoView(true);
  }

}
