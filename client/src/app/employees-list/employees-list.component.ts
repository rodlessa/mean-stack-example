import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-list',
  template: `
    <h2 class="text-center m-5">Transportadoras</h2>

    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Status</th>
                <th>Opções</th>
            </tr>
        </thead>

        <tbody>
            <tr *ngFor="let employee of employees$ | async">
                <td>{{employee.name}}</td>
                <td>{{employee.status}}</td>
                <td>
                    <button class="btn btn-primary me-1" [routerLink]="['edit/', employee._id]">Editar</button>
                    <button class="btn btn-danger" (click)="deleteEmployee(employee._id || '')">Remover</button>
                </td>
            </tr>
        </tbody>
    </table>

    <button class="btn btn-primary mt-3" [routerLink]="['new']">Adicionar entrada</button>
  `
})
export class EmployeesListComponent implements OnInit {
  employees$: Observable<Employee[]> = new Observable();

  constructor(private employeesService: EmployeeService) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  deleteEmployee(id: string): void {
    this.employeesService.deleteEmployee(id).subscribe({
      next: () => this.fetchEmployees()
    });
  }

  private fetchEmployees(): void {
    this.employees$ = this.employeesService.getEmployees();
  }
}
