import { Component, OnInit } from '@angular/core';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  public account = '';
  public amount = '';
  public selected = '';
  public interest = '';
  public payments = '';

  constructor(private bankService: BankService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    const data = {
      accountNumber: this.account,
      type: this.selected,
      amount: this.amount,
      interest: this.interest,
      payments: this.payments,
    };
    this.bankService.postTransaction(data).subscribe(() => {
      this.account = '';
      this.amount = '';
      this.selected = '';
      this.interest = '';
      this.payments = '';
    });
  }

}
