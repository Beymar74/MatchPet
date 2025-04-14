import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InicioSesion: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="relative w-full md:w-2/3 flex flex-col md:flex-row items-center justify-around">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <Image src="/Logo-removebg-preview 3.png" alt="Match Pet Logo" width={300} height={200} />
            <p className="mt-4 text-gray-700">
              En Match Pet conectamos a personas con mascotas que realmente se ajustan a su
              estilo de vida, personalidad y entorno. Creamos vínculos duraderos entre
              adoptantes y animales, fomentando la adopción responsable y la felicidad de ambos.
              Descubre una nueva forma de adoptar: más empática, más informada y 100% compatible.
            </p>
            <Link href="/Registro">
              <button
                className="mt-8 px-8 py-3 rounded-full text-white font-bold"
                style={{
                  backgroundImage: 'linear-gradient(to right, #C33764, #1D2671)',
                }}
              >
                Crear una cuenta
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
            <Image src="/Frame 2.png" alt="Illustration" width={400} height={500} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default InicioSesion;