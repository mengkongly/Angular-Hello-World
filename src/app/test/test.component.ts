import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Mengkong";
  public firstName  = "firstName";
  public isDisable  = false;

  // test class binding css
  public successClass = "text-success";
  public hasError = true;
  public isSpecial  = true;


  public messageClasses={
    "text-success":!this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor = "orange";
  public titleStyle  =  {
    color: "blue",
    fontStyle: "italic"
  }

  public greeting = "";
  constructor() { }

  ngOnInit() {
  }

  greetName(){
    return "Hello "+ this.name;
  }

  onClick(event){
    console.log(event);
    this.greeting = "Welcome to hello world angular. by event "+event.type;
  }

  messageLog(value){
    console.log(value);
  }

}
