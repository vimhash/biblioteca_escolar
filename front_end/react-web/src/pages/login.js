import React, { Component } from 'react';
import { Link } from "react-router-dom";

const http = new XMLHttpRequest();

const API_URL = "http://localhost:8001/server/login";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        correo: '',
        clave: ''
    };
  }

  handleCorreo = text => { this.setState({ correo: text }) }
  handleClave = text => { this.setState({ clave: text }) }

  login = () => {
    let tabla = "persona";
  
    let data = `{
      "tabla": "${tabla}", 
      "datos":
        {
          "persona_email": "${ this.state.correo }",
          "persona_clave": "${this.state.clave}"
        }
     }`;
  
    http.open("POST", API_URL, true);
    http.setRequestHeader("Content-Type", "application/json");
  
    if (this.state.correo === "" || this.state.clave === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      http.send(data);
      alert("Se ha registrado correctamente");
      // window.location.assign("./login.html");
    }
  };

  render() {
    return (
      <div class="bg-teal-200 h-screen font-sans">
        <div class="container mx-auto h-full flex justify-center items-center">
        <div class="w-1/3">
            <h1 class="font-hairline mb-6 text-center text-2xl">Bienvenido!</h1>
            <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                <div class="mb-4">
                    <label class="font-bold text-gray-700 block mb-2">Correo Insttitucional</label>
                    <input type="text" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                    id="persona_email"
                    type="text"
                    placeholder="correo@yavirac.edu.ec"
                    onChangeText={ this.handleCorreo } 
                    />
                </div>

                <div class="mb-4">
                    <label class="font-bold text-gray-700 block mb-2">Contraseña</label>
                    <input type="text" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                    id="persona_clave"
                    type="password"
                    placeholder="******************"
                    onChangeText={ this.handleClave } 
                    secureTextEntry={true}
                    />
                </div>

                <div class="flex items-center justify-between">
                    <button class="bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded" onPress={() => this.login()}>
                        Ingresar
                    </button>
                </div>  
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
