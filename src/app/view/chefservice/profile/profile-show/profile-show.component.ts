import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-show',
  templateUrl: './profile-show.component.html',
  styleUrls: ['./profile-show.component.scss']
})
export class ProfileShowComponent implements OnInit {
name:any='ahmed';
  constructor() { }

  ngOnInit(): void {
  }

}
