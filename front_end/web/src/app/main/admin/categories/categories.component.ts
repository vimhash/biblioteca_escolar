import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoriasForm: FormGroup
  table_header: any

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.table_header = [
      {
        fecha: 'Fecha',
        idcliente:'Cliente',
        idestado: 'Estado'
      }
    ]   
  }

  formularioProveedor(){
    this.categoriasForm = this.formBuilder.group({
      idcliente:['',[Validators.required]]
    })
  }
}
