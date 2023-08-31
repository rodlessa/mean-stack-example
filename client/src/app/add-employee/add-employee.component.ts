import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  template: `
    <h2 class="text-center m-5">Adicionar</h2>
    <app-employee-form (formSubmitted)="addEmployee($event)"></app-employee-form>
  `
})
export class AddEmployeeComponent {
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  addEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee)
      .subscribe({
        next: () => {
          this.router.navigate(['/transportadoras']);
        },
        error: (error) => {
          alert("Failed to create transportadoras");
          console.error(error);
        }
      });
  }
}
