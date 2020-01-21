import React from'react';

const Header = () => (
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow mx-64">
                <div class="relative text-gray-600 block mt-4 lg:inline-block lg:mt-0 mr-4">
                    <input type="search" name="search" placeholder="Buscar Libro" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                    <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                       
                    </button>
                </div>
                <a class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    Ayuda
                </a>
            </div>
            <div>
                <a href="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-blue hover:border-transparent hover:text-teal hover:bg-red mt-4 lg:mt-0">Salir</a>
            </div>
        </div>
    </nav>
)

export default Header;