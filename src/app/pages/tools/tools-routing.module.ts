import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { RequestTesterComponent } from './components/request-tester/request-tester.component';

import { ToolsPage } from './tools.page';

const routes: Routes = [
  {
    path: '',
    component: ToolsPage,
    children: [
      {
        path: 'qrcode',
        component: QrcodeComponent
      },
      {
        path: 'request-tester',
        component: RequestTesterComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsPageRoutingModule {}
