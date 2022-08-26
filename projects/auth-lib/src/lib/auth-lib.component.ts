import { Component, OnInit } from '@angular/core';
import { AuthLibService } from './auth-lib.service';

@Component({
  selector: 'lib-auth-lib',
  template: `
    <p>
      User: {{user}}
    </p>
  `,
  styles: [
  ]
})
export class AuthLibComponent implements OnInit {
  user: string;
  constructor(private authLibService: AuthLibService) { }

  ngOnInit(): void {
    this.user = this.authLibService.user;
  }

}
