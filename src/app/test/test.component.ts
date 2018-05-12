import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  displayName = true;

  @Input('parentData')
  public name;

  @Output()
  public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  fireEvent(){
    this.childEvent.emit('Hey Codevalution');
  }

}
