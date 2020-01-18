import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { InstituteComponent } from './main/admin/institute/institute.component';
import { CategoriesComponent } from './main/admin/categories/categories.component';
import { AdminsComponent } from './main/user_registration/admins/admins.component';
import { StudentsComponent } from './main/user_registration/students/students.component';
import { NewBookComponent } from './main/books_catalogue/new-book/new-book.component';
import { CatalogueComponent } from './main/books_catalogue/catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    InstituteComponent,
    CategoriesComponent,
    AdminsComponent,
    StudentsComponent,
    NewBookComponent,
    CatalogueComponent
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
