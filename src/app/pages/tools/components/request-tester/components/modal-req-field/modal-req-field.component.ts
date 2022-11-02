import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';

@Component({
  selector: 'app-modal-req-field',
  templateUrl: './modal-req-field.component.html',
  styleUrls: ['./modal-req-field.component.scss'],
})
export class ModalReqFieldComponent implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  @Input() trigger = '';
  @Input() title = '';
  field = {
    key: '',
    value: ''
  };
  fieldString = '{}';

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {}

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      // this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  addField() {
    const parsedString = JSON.parse(this.fieldString);
    const {
      key,
      value
    } = this.field;
    parsedString[key] = value;
    this.field = {
      key: '',
      value: ''
    };
    this.fieldString = JSON.stringify(parsedString, null, 4);
  }

  removeField() {
    const parsedString = JSON.parse(this.fieldString);
    const keys = Object.keys(parsedString);
    delete parsedString[keys[keys.length-1]];
    this.fieldString = JSON.stringify(parsedString, null, 4);
  }

  copyField() {
    this.utilsService.copyToNativeClipboard(this.fieldString);
    this.utilsService.presentToast('Copied text to Clipboard', 'success');
  }

}
