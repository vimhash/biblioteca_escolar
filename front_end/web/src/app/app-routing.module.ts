import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './main/home/home.component';
import { CategoriesComponent } from './main/admin/categories/categories.component';
import { InstituteComponent } from './main/admin/institute/institute.component';
import { NewBookComponent } from './main/books_catalogue/new-book/new-book.component';
import { CatalogueComponent } from './main/books_catalogue/catalogue/catalogue.component';
import { StudentsComponent } from './main/user_registration/students/students.component';
import { AdminsComponent } from './main/user_registration/admins/admins.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin/categoria', component: CategoriesComponent },
  { path: 'admin/institucion', component: InstituteComponent },
  { path: 'books_catalogue/new-book', component: NewBookComponent },
  { path: 'books_catalogue/catalogue', component: CatalogueComponent },
  { path: 'user_registration/admins', component: AdminsComponent },
  { path: 'user_registration/students', component: StudentsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
