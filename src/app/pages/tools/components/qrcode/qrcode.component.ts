import { Component, OnDestroy, OnInit } from '@angular/core';

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit, OnDestroy {

  public content = '';
  public isScanning = false;

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {}

  async handleScan() {
    this.isScanning = true;
    await this.startScan();
    this.isScanning = false;
  }

  async startScan() {
    // Check camera permission
    await BarcodeScanner.checkPermission({ force: true });

    // make background of WebView transparent
    BarcodeScanner.hideBackground();
    document.querySelector('body').classList.add('scanner-active');

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      this.content = result.content;
    }
    document.querySelector('body').classList.remove('scanner-active');
  };

  copyContentToClipBoard() {
    this.utilsService.copyToNativeClipboard(this.content);
    this.utilsService.presentToast('Copied text to Clipboard', 'success');
  }

  ngOnDestroy() {
    document.querySelector('body').classList.remove('scanner-active');
  }

}
