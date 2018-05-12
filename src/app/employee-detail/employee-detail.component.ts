import { EmployeeService } from "./../employee.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "employee-detail",
  templateUrl: "./employee-detail.component.html",
  styleUrls: ["./employee-detail.component.css"]
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);
  }
}
