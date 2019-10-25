import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  numberA = 0;
  numberB = 1;
  result: number;
  constructor() { }

  updateNumberA(a) {
    this.numberA = a;
  }

  updateNumberB(b) {
    this.numberB = b;
  }
  ngOnInit() {
  }
  ChangingValue(value: any) {
    let result = 0;
    switch (value) {
      case '+':
        result = parseFloat(String(this.numberA)) + parseFloat(String(this.numberB));
        break;
      case '-':
        result = this.numberA - this.numberB;
        break;
      case '*':
        result = this.numberA * this.numberB;
        break;
      case '/':
        result = this.numberA / this.numberB;
        break;
    }
    this.result = result;
  }
}
