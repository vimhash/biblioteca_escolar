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
    this.formularioCategoria();

    this.table_header = [
      {
        categoria_id: 'Nº',
        categoria_nombre: 'Categoria'
      }
    ]
  }

  formularioCategoria(){
    this.categoriasForm = this.formBuilder.group({
      categoria_nombre: [ '', [ Validators.required ] ]
    })
  }
}
