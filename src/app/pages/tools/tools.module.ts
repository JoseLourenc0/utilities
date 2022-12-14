import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolsPageRoutingModule } from './tools-routing.module';

import { ToolsPage } from './tools.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { QrcodeComponent } from './components/qrcode/qrcode.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolsPageRoutingModule,
    SharedModule
  ],
  declarations: [ToolsPage, QrcodeComponent]
})
export class ToolsPageModule {}
