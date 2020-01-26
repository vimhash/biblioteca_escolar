import React, { Component } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:8001/server/login";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      correo: '',
      clave: ''
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loginAccess = e => {
    e.preventDefault()
    if (this.state.correo === "" || this.state.clave === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API_URL, this.state)
      .then(response => {
        if ( response.data.mensaje === "found" ) {
          window.location.assign("http://localhost:3000/home");
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
      })
    }
  };

  render() {
    const { correo, clave } = this.state
    return (
      <div class="bg-teal-200 h-screen font-sans">
        <div class="container mx-auto h-full flex justify-center items-center">
        <div class="w-1/3">
            <h1 class="font-hairline mb-6 text-center text-2xl">Bienvenido!</h1>
            <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={ this.loginAccess }>
                <div class="mb-4">
                  <label class="font-bold text-gray-700 block mb-2">Correo Institucional</label>
                  <input type="text" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                  type="text"
                  placeholder="correo@yavirac.edu.ec"
                  name="correo"
                  value={ correo }
                  onChange={ this.changeHandler } 
                  />
                </div>

                <div class="mb-4">
                  <label class="font-bold text-gray-700 block mb-2">Contraseña</label>
                  <input type="text" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                  type="password"
                  placeholder="******************"
                  name="clave"
                  value={ clave }
                  onChange={ this.changeHandler } 
                  secureTextEntry={true}
                  />
                </div>

                <div class="flex items-center justify-between">
                  <button type="submit" class="bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded" onPress={() => this.login()}>
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

export default Login;
