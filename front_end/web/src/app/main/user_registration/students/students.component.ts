import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  studentsForm: FormGroup
  table_header: any

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formularioStudents();

    this.table_header = [
      {
        persona_identificacion: 'Identificacion',
        persona_nombre: 'Nombre Completo',
        persona_email: 'Correo Electronico'
      }
    ]
  }

  formularioStudents(){
    this.studentsForm = this.formBuilder.group({
      categoria_nombre: [ '', [ Validators.required ] ]
    })
  }
}
