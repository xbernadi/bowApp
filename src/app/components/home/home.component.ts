import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor( public auth: AuthService ) {
    auth.handleAuthentication();
  }

    // Auth0
    login() {
      this.auth.login();
    }

  ngOnInit() {
  }

}
