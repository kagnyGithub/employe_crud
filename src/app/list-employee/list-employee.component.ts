import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../emplyee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  public employees: Employee[] | undefined
  constructor(
    private employeeService: EmployeeService,
    private router: Router

    ) { }

  ngOnInit(): void {
    this.releodData();
  }
  releodData(){
    this.employeeService.getEmployees().subscribe((res:any)=>{
      this.employees = res;
    })
  }

  delete(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.releodData();
    });
   
  }

  details(id: number){
     this.router.navigate(['/employees',id]);
  }

}
