import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

const API_LOGIN = "http://localhost:8001/server/login";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      correo: '',
      clave: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loginAccess = e => {
    e.preventDefault()
    if (this.state.correo === "" || this.state.clave === "") {
      Swal.fire(
        '',
        'Complete todos los datos para continuar...!'
      )
    } else {
      axios.post(API_LOGIN, this.state)
      .then(response => {
        if ( response.data.mensaje === "found" ) {
          this.props.history.push('/virtual_library')
        }
      })
      .catch(error => {
        Swal.fire('Oops... Datos incorrectos!', 'Vuelve a intentarlo', 'error')
        console.log(error)
      })
    }
  };

  render() {
    const { correo, clave } = this.state
    const imagen = require("../assets/background.jpg")
    return (
      <div className="h-screen font-sans w-screen" style={ { backgroundImage: `url(${imagen})` } }>
        <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-1/3">
          <h1 className="font-hairline mb-6 text-center text-6xl text-white">Bienvenido!</h1>
          <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={ this.loginAccess }>
              <div className="mb-4">
                <label className="font-bold text-gray-700 block mb-2">Correo Institucional</label>
                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  type="text"
                  placeholder="correo@yavirac.edu.ec"
                  name="correo"
                  pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                  value={ correo }
                  onChange={ this.changeHandler }
                  autoComplete="off"
                />
              </div>

                <div className="mb-4">
                  <label className="font-bold text-gray-700 block mb-2">Contraseña</label>
                  <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    type="password"
                    placeholder="*************"
                    name="clave"
                    value={ clave }
                    onChange={ this.changeHandler } 
                    securetextentry="true"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button type="submit" className="bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded">
                    Ingresar
                  </button>
                </div>  
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
