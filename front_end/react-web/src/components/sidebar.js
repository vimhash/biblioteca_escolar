import React from'react';
import { Link } from'react-router-dom';

const Sidebar = () => (
//   <nav>
//     <ul>
//       <Link to="/">HomeLink</Link>
//       <Link to="/about">AboutLink</Link>
//       <Link to="/posts">PostsLink</Link>
//     </ul>
//   </nav>
<nav class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
    <div class="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        <div class="flex items-center flex-no-shrink text-white mr-6 mx-64">

        </div>
        <a class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0">
            <span class="font-semibold text-xl tracking-tight text-black">Sistema Bibliotecario</span>
        </a>
        <div class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
            <ul class="md:flex-col md:min-w-full flex flex-col list-none">
                <li class="items-center">
                    <a class="text-pink-500 hover:text-pink-600 text-xs uppercase py-3 font-bold block" href="/home">
                        <i class="fas fa-tv opacity-75 mr-2 text-sm"></i>
                        Inicio
                    </a>
                </li>
                <li class="items-center">
                    <a class="text-gray-800 text-xs uppercase py-3 font-bold block">
                        <i class="fas fa-newspaper text-gray-900 mr-2 text-sm"></i>
                        Administracion
                        <ul>
                            <li class="mx-8 hover:text-gray-600"><i class="fas fa-arrow-circle-right"></i><a>Institución</a></li>
                            <li class="mx-8 hover:text-gray-600"><i class="fas fa-arrow-circle-right"></i><a>Categoria</a></li>
                        </ul>
                    </a>
                </li>
                <li class="items-center">
                    <a class="text-gray-800 text-xs uppercase py-3 font-bold block">
                        <i class="fas fa-user-circle text-gray-900 mr-2 text-sm"></i>
                        Registro de usuarios
                        <ul>
                            <li class="mx-8 hover:text-gray-600"><i class="fas fa-arrow-circle-right"></i><a>Administradores</a></li>
                            <li class="mx-8 hover:text-gray-600"><i class="fas fa-arrow-circle-right"></i><a>Estudiantes</a></li>
                        </ul>
                    </a>
                </li>
                <li class="items-center">
                    <a class="text-gray-800 text-xs uppercase py-3 font-bold block">
                        <i class="fas fa-fingerprint text-gray-900 mr-2 text-sm"></i>
                        Libros y catálogos
                        <ul>
                            <li class="mx-8 hover:text-gray-600"><i class="fas fa-arrow-circle-right"></i><a>Nuevo Libro</a></li>
                            <li class="mx-8 hover:text-gray-600"><i class="fas fa-arrow-circle-right"></i><a>Catalogo</a></li>
                        </ul>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
)

export default Sidebar;