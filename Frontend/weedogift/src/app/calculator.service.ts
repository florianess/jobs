import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Data {
  ceil?: CalculatorComponentValue,
  floor?: CalculatorComponentValue,
  equal?: CalculatorComponentValue,
}

interface CalculatorComponentValue {
    value: number;
    cards: number[];
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  get(amount: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'tokenTest123'
      })
    };
    return this.http.get<Data>("http://localhost:3000/shop/5/search-combination?amount="+amount,httpOptions)
  }
}
