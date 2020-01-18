import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { InstituteComponent } from './main/admin/institute/institute.component';
import { CategoriesComponent } from './main/admin/categories/categories.component';
import { AdminsComponent } from './main/user_registration/admins/admins.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'institute', component: InstituteComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'admins', component: AdminsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
