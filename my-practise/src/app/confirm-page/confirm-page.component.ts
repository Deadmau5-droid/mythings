import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.scss']
})
export class ConfirmPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleShow() {
    // this.showPassword = !this.showPassword;
    // this.input.type = this.showPassword ? 'text' : 'password';
  }
}
