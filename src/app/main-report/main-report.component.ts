import { Component, OnInit } from '@angular/core';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-main-report',
  templateUrl: './main-report.component.html',
  styleUrls: ['./main-report.component.css']
})
export class MainReportComponent implements OnInit {

  public account = '';
  public transactions = [];

  constructor(private bankService: BankService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.bankService.getAccount(this.account).subscribe(data => {
      this.transactions = data;
    });
  }
}
