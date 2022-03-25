import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  operation : string = "";
  result    : string | undefined ;

  constructor() { }

  ngOnInit(): void {
  }

  addNumber(value: string): void {
    this.operation += value;
  }
  
  calculate(): void {
    this.result = eval(this.operation);
  }

  clean(): void {
    this.result = "";
    this.operation = "";
  }
}
