import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;

  constructor(private authService: AuthLibService, private router:Router) {

   }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.authService.login(this.userName, '');
    this.router.navigate(['./home']);
  }

}
