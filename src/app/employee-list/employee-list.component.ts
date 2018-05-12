import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = []

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
