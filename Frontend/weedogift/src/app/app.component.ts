import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public value : number;
  public data;
  public result : string;
  public showPlus : boolean = true;
  public showMinus : boolean = true;

  constructor(private calculatorService: CalculatorService) { }

  display() {
    if (this.data.equal) {
      this.result = "Votre montant est composé des cartes suivantes :\n";
      this.data.equal.cards.forEach(c => this.result += "- " + c.toString() + " €"+"\n");
    } else if (Object.keys(this.data).length ==  1) {
      this.value = this.data[Object.keys(this.data)[0]].value;
      this.onClick();
    } else {
      this.result = "Montant disponible:\n";
      if (this.data.floor) {
        this.result +="-" + this.data.floor.value.toString() + "€ \n";
      }
      if (this.data.ceil) {
        this.result +="-" + this.data.ceil.value.toString() + "€ \n";
      }
    }
  }

  onClick() {
   this.calculatorService.get(this.value.toString())
    .subscribe(data => {
      this.data = data;
      this.display();
    })
  }

  plus() {
    this.calculatorService.get(this.value.toString())
     .subscribe(data => {
       if (data.ceil) {
         if (data.equal) {
           this.value = data.ceil.value+1;
           this.plus();
         } else {
           this.value = data.ceil.value;
         }
         this.onClick();
       } else {
         this.showPlus = false;
       }
       if (!this.showMinus) {
         this.showMinus = true;
       }
     })
  }

  minus() {
    this.calculatorService.get(this.value.toString())
     .subscribe(data => {
       if (data.floor) {
         if (data.equal) {
           this.value = data.floor.value-1;
           this.minus();
         } else {
           this.value = data.floor.value;
         }
         this.onClick();
       } else {
         this.showMinus = false;
       }
       if (!this.showPlus) {
         this.showPlus = true;
       }
     })
  }

  ngOnInit() { }
}
