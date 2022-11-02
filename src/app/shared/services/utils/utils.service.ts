import { Injectable } from '@angular/core';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private clipboard: Clipboard,
    private toastController: ToastController
  ) { }

  waitSomeTimeInSeconds(time: number) {
    return new Promise(resolve => setTimeout(() => resolve(true), time * 1000));
  }

  copyToNativeClipboard(content: string) {
    this.clipboard.copy(content);
  }

  pasteNativeClipboard() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.clipboard.paste();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  async presentToast(
    message: string,
    color: 'success' | 'warning' | 'danger' | 'primary' | 'secondary' | 'tertiary' | 'dark',
    duration?: number
  ) {
    const toast = await this.toastController.create({
      message,
      duration: duration ?? 1500,
      position: 'bottom',
      color
    });

    await toast.present();
  }
}
