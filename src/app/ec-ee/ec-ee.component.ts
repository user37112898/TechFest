import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ec-ee',
  templateUrl: './ec-ee.component.html',
  styleUrls: ['./ec-ee.component.css']
})
export class EcEeComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  scroll(el){
    el.scrollIntoView(true);
  }

}
