import React from 'react';

const Perfil = () => {
  return (
    <div className="grid grid-cols-[250px_1fr] min-h-screen font-sans">
      {/* Sidebar */}
      <aside className="bg-[#0F0026] text-white flex flex-col items-center p-6 gap-6">
        <img src="/Logo-removebg-preview 3.png" alt="Match Pet Logo" className="w-40 mb-6" />
        <nav className="flex flex-col gap-6 text-sm font-medium w-full">
          <a href="#" className="text-white hover:text-pink-400 flex items-center gap-2 px-4">
            <img src="/Home.svg" alt="Home Icon" className="w-5 h-5" /> Principal
          </a>
          <a href="#" className="text-pink-400 flex items-center gap-2 px-4">
            <img src="/person.svg" alt="Perfil Icon" className="w-5 h-5" /> Perfil
          </a>
          <a href="#" className="text-white hover:text-pink-400 flex items-center gap-2 px-4">
            <img src="/message.svg" alt="Solicitudes Icon" className="w-5 h-5" /> Solicitudes
          </a>
          <a href="#" className="text-white hover:text-pink-400 flex items-center gap-2 px-4">
            <img src="/Document.svg" alt="Aceptaciones Icon" className="w-5 h-5" /> Aceptaciones
          </a>
          <a href="#" className="text-white hover:text-pink-400 flex items-center gap-2 px-4">
            <img src="/message.svg" alt="Notificaciones Icon" className="w-5 h-5" /> Notificaciones
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="bg-[#f6f6fa] p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <input
            placeholder="🔍 Buscar"
            className="w-full max-w-lg border border-gray-300 px-4 py-2 rounded-lg text-sm text-[#490057]"
          />
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-[#490057]">Charles Deo</span>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="/Ellipse 58.svg" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <a href="#" className="text-xs text-pink-500 underline">Salir</a>
          </div>
        </div>

        {/* Portada + perfil */}
        <div className="relative mt-6">
          <img src="/Captura de pantalla 2023-04-23 215814.png" alt="Portada" className="w-full h-48 object-cover rounded-xl" />
          <div className="absolute -bottom-12 left-10">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow">
              <img src="/Captura de pantalla 2025-04-15 002239.png" alt="Avatar grande" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#A020F0]">Charles Deo</h1>
            <p className="text-sm text-[#490057]">Adoptante</p>
          </div>
          <button className="flex items-center gap-2 text-sm border border-green-500 text-green-500 px-4 py-2 rounded-full">
            <img src="/App logo 044.svg" alt="whatsapp" className="w-5 h-5" /> WhatsApp
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          {/* Sobre mí */}
          <div className="bg-white rounded-xl shadow p-5 text-sm text-[#490057]">
            <h2 className="font-semibold text-[#C33764] mb-4">Sobre mi</h2>
            <div className="flex items-center gap-2 mb-2">👤 Masculino</div>
            <div className="flex items-center gap-2 mb-2">📅 Nacio junio 26 1996</div>
            <div className="flex items-center gap-2">📧 example@gmail.com</div>
          </div>

          {/* Publicaciones */}
          <div className="bg-white rounded-xl shadow p-5 col-span-1">
            <h2 className="font-semibold text-[#C33764] mb-4">Publicaciones</h2>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="/Ellipse 58.svg" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="text-sm text-[#490057]">
                <p className="font-semibold">Charles Deo</p>
                <span className="text-xs">15mins ago</span>
              </div>
            </div>
            <img src="/Captura de pantalla 2023-04-23 215814.png" alt="post" className="w-full rounded-xl mb-3" />
            <p className="text-sm font-medium text-[#490057]">
              Charles Deo <span className="text-[#490057] font-normal">Gracias por leer esto... no </span>
            </p>
            <div className="flex gap-4 text-[#A020F0] text-sm mt-2">
              <span className="flex items-center gap-1">💗 1,498</span>
              <span className="flex items-center gap-1">💬 3,000</span>
            </div>
          </div>

          {/* Recomendaciones */}
          <div className="space-y-4 text-sm text-[#490057]">
            <div className="bg-white rounded-xl shadow p-5">
              <h2 className="font-semibold text-[#C33764] mb-4">Refugios que Recomendamos</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <img src="/Ellipse 58.svg" className="w-6 h-6 rounded-full" />
                  <div>
                    <p>Alexsey Stave</p>
                    <p className="text-xs">alexsey99@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/Ellipse 58.svg" className="w-6 h-6 rounded-full" />
                  <div>
                    <p>Anton Tkachev</p>
                    <p className="text-xs">tkachevanton@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/images (1).png" className="w-6 h-6 rounded-full" />
                  <div>
                    <p>Anton Tkacheve</p>
                    <p className="text-xs">tkachevanton@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-5">
              <h2 className="font-semibold text-[#C33764] mb-4">Mascotas Recomendadas</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/images (1).png" className="w-6 h-6 rounded-full" />
                    <p>Shelby Goode</p>
                  </div>
                  <span className="text-green-500">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/images (1).png" className="w-6 h-6 rounded-full" />
                    <p>Robert Bacins</p>
                  </div>
                  <span className="text-red-500">Busy</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/images (1).png" className="w-6 h-6 rounded-full" />
                    <p>John Carilo</p>
                  </div>
                  <span className="text-green-500">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/Captura de pantalla 2025-04-15 002239.png" className="w-6 h-6 rounded-full" />
                    <p>Adriene Watson</p>
                  </div>
                  <span className="text-green-500">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Perfil;
