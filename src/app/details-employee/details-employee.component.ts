import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../emplyee';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {

  public employee: Employee | undefined
  constructor(
    private router: ActivatedRoute,
    private serviceEmployee: EmployeeService
    ) { }

  ngOnInit(): void {
    const routerParm = this.router.snapshot.paramMap.get('id');
    const routerParmId = Number(routerParm);
    this.serviceEmployee.getOneEmployee(routerParmId).subscribe(data=>{
      this.employee = data;
      
    })
  }

}
