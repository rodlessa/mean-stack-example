import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component'; // <-- add this line
import { EditEmployeeComponent } from './edit-employee/edit-employee.component'; // <-- add this line

const routes: Routes = [
  { path: '', redirectTo: 'transportadoras', pathMatch: 'full' },
  { path: 'transportadoras', component: EmployeesListComponent },
  { path: 'transportadoras/new', component: AddEmployeeComponent }, // <-- add this line
  { path: 'transportadoras/edit/:id', component: EditEmployeeComponent }]; // <-- add this line

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
