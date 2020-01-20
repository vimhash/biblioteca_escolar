import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './main/admin/categories/categories.component';
import { InstituteComponent } from './main/admin/institute/institute.component';
import { HomeComponent } from './main/home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewBookComponent } from './main/books_catalogue/new-book/new-book.component';
import { CatalogueComponent } from './main/books_catalogue/catalogue/catalogue.component';
import { AdminsComponent } from './main/user_registration/admins/admins.component';
import { StudentsComponent } from './main/user_registration/students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,
    CategoriesComponent,
    InstituteComponent,
    NewBookComponent,
    CatalogueComponent,
    AdminsComponent,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
