import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../emplyee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  public employee: Employee =new Employee();
  public submitted = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  save(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data)
      this.employee =new Employee();
    })
  }

  onSubmit(){
    this.save();
    this.submitted=true;
  }

}
