import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'm-announcement',
  templateUrl: './m-announcement.component.html',
  styleUrls: ['./m-announcement.component.css']
})

export class MAnnouncementComponent {

  // temp
  constructor(private authService: AuthService) {

  }

  // temporary login button
  login() {
    this.authService.login();
  }
}
