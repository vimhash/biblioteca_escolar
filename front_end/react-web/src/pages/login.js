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
          alert("ok")
          window.location.assign("http://localhost:3000/home");
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
        console.log(error)
      })
    }
  };

  render() {
    const { correo, clave } = this.state
    return (
      <div className="font-mono">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                
              </div>
              <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Bienvenido!</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={ this.loginAccess }>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="persona_email">
                      Correo Institucional
                    </label>
                    <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      name="correo"
                      placeholder="correo@yavirac.edu.ec"
                      value={ correo }
                      onChange={ this.changeHandler } 
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="persona_clave">
                      Contraseña
                    </label>
                    <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="password"
                      name="clave"
                      placeholder="******************"
                      value={ clave }
                      onChange={ this.changeHandler } 
                      securetextentry="true"
                    />
                  </div>
                  <div className="mb-6 text-center">
                    {/* <Link to="/home"> */}
                      <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                        Ingresar
                      </button>
                    {/* </Link> */}
                  </div>
                  <hr className="mb-6 border-t" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
