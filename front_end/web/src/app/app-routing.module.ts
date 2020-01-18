import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstituteComponent } from './main/admin/institute/institute.component';
import { CategoriesComponent } from './main/admin/categories/categories.component';
import { AdminsComponent } from './main/user_registration/admins/admins.component';
import { StudentsComponent } from './main/user_registration/students/students.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'institute', component: InstituteComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'admins', component: AdminsComponent },
  { path: 'students', component: StudentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
