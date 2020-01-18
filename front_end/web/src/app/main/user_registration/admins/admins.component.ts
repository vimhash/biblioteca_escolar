import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  adminsForm: FormGroup
  table_header: any

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formularioAdmins();

    this.table_header = [
      {
        persona_identificacion: 'Identificacion',
        persona_nombre: 'Nombre Completo',
        persona_email: 'Correo Electronico'
      }
    ]
  }

  formularioAdmins(){
    this.adminsForm = this.formBuilder.group({
      categoria_nombre: [ '', [ Validators.required ] ]
    })
  }
}
