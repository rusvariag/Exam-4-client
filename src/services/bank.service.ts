import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BankService {

    constructor(private http: HttpClient) { }

    getAccount(id): Observable<any> {
        return this.http.get(`/api/account/${id}`);
    }

    postTransaction(data): Observable<any> {
        return this.http.post(`/api/transaction`, data);
    }
}
