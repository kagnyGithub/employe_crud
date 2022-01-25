import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { DetailsEmployeeComponent } from '../details-employee/details-employee.component';

const rooter: Routes = [
  {path:'', component:ListEmployeeComponent},
  {path:'employees', component:ListEmployeeComponent},
  {path:'create', component: CreateEmployeeComponent},
  {path:'employees/:id', component:DetailsEmployeeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rooter)
  ],
  exports:[
     RouterModule
  ]
})
export class RoutingModule { }
