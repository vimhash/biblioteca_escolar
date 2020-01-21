import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Login = () => {
  return (
    <body class="font-mono">
      <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
          <div class="w-full xl:w-3/4 lg:w-11/12 flex">
            <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
              
            </div>
            <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 class="pt-4 text-2xl text-center">Bienvenido!</h3>
              <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="persona_email">
                    Correo Institucional
                  </label>
                  <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="persona_email"
                    type="text"
                    placeholder="correo@yavirac.edu.ec"
                  />
                </div>
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="persona_clave">
                    Contraseña
                  </label>
                  <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="persona_clave"
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <div class="mb-6 text-center">
                  <button class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                    <Link to="/home">Ingresar</Link>
                  </button>
                </div>
                <hr class="mb-6 border-t" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
