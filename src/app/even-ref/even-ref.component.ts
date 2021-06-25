import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-ref',
  templateUrl: './even-ref.component.html',
  styleUrls: ['./even-ref.component.css']
})
export class EvenRefComponent implements OnInit {

  corBackGound="";

  changeCor(){
    this.corBackGound = "red";

    this.corBackGound = this.corBackGound == "red" ?
    'White':'red';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
