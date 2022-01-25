import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from './emplyee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  urlBase = 'http://localhost:8080/api/v1/rest/employes';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any>{
    return this.http.get<Employee>(this.urlBase).pipe(
      map((res:any)=>{
      return res;
    })
    )
  }

  getOneEmployee(id: number): Observable<any>{
    return this.http.get<Employee>(`${this.urlBase}/${id}`);
  }
  createEmployee(employee: Employee): Observable<any>{
    return this.http.post(`${this.urlBase}`,employee);
  }

  updateEmployee(employee: Employee,id: number): Observable<any>{
    return this.http.put(`${this.urlBase}/${id}`,employee);
  }

  deleteEmployee(id: number): Observable<any>{
    return this.http.delete(`${this.urlBase}/${id}`);
  }

  
  
  
}
