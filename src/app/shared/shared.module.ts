import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    Clipboard
  ]
})
export class SharedModule { }
