import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public tools = [
    {
      name: 'QrCode',
      url: 'qrcode',
      icon: 'qr-code-outline'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
