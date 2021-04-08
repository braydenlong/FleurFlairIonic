import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

// import { SessionService } from '../services/session.service';
// import { StaffService } from '../services/staff.service';
// import { Staff } from '../models/staff';
// import { AccessRightEnum } from '../models/access-right-enum.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  submitted: boolean;
	username: string;
	password: string;
	loginError: boolean;
	errorMessage: string;

  // constructor(private router: Router,
	// 	public sessionService: SessionService,
	// 	private staffService: StaffService) {
	// 	this.submitted = false;
	// }

  ngOnInit() {
  }

  clear() {
		this.username = "";
		this.password = "";
	}

  // back() {
	// 	this.router.navigate(["/index"]);
	// }

}
