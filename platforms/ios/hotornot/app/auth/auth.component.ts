import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from "../auth.service";
import {User} from "../user";

@Component({
  selector: 'app-register',
  moduleId: module.id,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user:User;
  isLogging:boolean;
  hasErrors:boolean;
  errorMsgArray:string[];

  constructor(private router:Router,private _authProvider: AuthService) {
    this.user = new User();
    this.isLogging = true;
  }

  ngOnInit(): void {
    //if (this._tokenService.userSignedIn()) {
    //  this.router.navigate(['cats'])
    //}
  }
  submit() {
    if (this.isLogging) {
      console.log('dupa');
      let appSettings = require("application-settings");
      this._authProvider.sign_in(this.user).subscribe(
          (response) => {
            appSettings.setString("accessToken", response.headers.get('access-token'))
            appSettings.setString("client", response.headers.get('client'))
            appSettings.setString("uid", response.headers.get('uid'))
            appSettings.setString("expiry", response.headers.get('expiry'))
            appSettings.setString("token-type", response.headers.get('token-type'))
            this.router.navigate(['cats'])
          },
          () => {}
      )
    } else {
      this._authProvider.register(this.user)
    }
  }


  toggleLogin() {
    this.isLogging = !this.isLogging
  }
}
