import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainReportComponent } from './main-report/main-report.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: 'account', component: MainReportComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: '**', component: MainReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
