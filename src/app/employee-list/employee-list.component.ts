import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = []
  private errorMsg;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => {
      this.employees = data
    },error => {
      this.errorMsg = error;
    });
  }

}
