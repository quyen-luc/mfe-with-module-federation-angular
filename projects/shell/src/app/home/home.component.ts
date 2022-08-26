import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { technicalService } from 'mfe-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  technical$ = new Observable();

  constructor(private authLibService: AuthLibService) { 
    console.log(authLibService.user);
  }

  ngOnInit(): void {
    this.technical$ = technicalService.getTechinical();
  }


}
