import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { InstituteComponent } from './main/admin/institute/institute.component';
import { ProviderComponent } from './main/admin/provider/provider.component';
import { CategoriesComponent } from './main/admin/categories/categories.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'institute', component: InstituteComponent },
  { path: 'provider', component: ProviderComponent },
  { path: 'categories', component: CategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
