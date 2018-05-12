import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {

  public name = "codevalution";
  public date = new Date();

  constructor() {}

  ngOnInit() {}

}
