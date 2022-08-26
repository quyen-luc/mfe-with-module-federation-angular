import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadTComponent implements OnInit {
  @Input() fileName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
