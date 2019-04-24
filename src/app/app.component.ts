import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DashBoard for ADM Java';
  title2 = "10cfnsdjkncfeksl";
  title2variable ="prakash";
  message:string;

  receiveMessage($event) {
  alert("Inside recievemessage");
    this.message = $event
  }
  
}
