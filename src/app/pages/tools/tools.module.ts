import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolsPageRoutingModule } from './tools-routing.module';

import { ToolsPage } from './tools.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { RequestTesterComponent } from './components/request-tester/request-tester.component';
import { ModalReqFieldComponent } from './components/request-tester/components/modal-req-field/modal-req-field.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolsPageRoutingModule,
    SharedModule
  ],
  declarations: [ToolsPage, QrcodeComponent, RequestTesterComponent, ModalReqFieldComponent]
})
export class ToolsPageModule {}
