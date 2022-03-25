import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() operation  : string | undefined;
  @Input() result     : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
