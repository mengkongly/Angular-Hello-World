import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {

  public auto_type="";
  public displayName=false;
  public color="blue";

  public colors = ["Red","Green","Blue","Yellow","Orange"];

  //@Input() public parentData;  can use two way
  @Input('parentData') public name;
  @Output() public childEvent  =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    var arr= ["a","b","c"];
    this.childEvent.emit(arr);
  }

}
