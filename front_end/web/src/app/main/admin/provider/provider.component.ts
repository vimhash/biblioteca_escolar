import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  proveedorForm: FormGroup
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
    this.proveedorForm = this.formBuilder.group({
      idcliente:['',[Validators.required]]
    })
  }

}
