import './App.css'

function App() {
  return (
    <>
    {/* Header */}
      <header className='fixed top-0 left-0 right-0 z-50 w-full max-w-screen bg-black shadow-md transition-all duration-300'>
        <div className='container mx-auto px-4 sm:px-6 py-4 flex flex-row justify-between items-center gap-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <img src="/logo-página.png" alt="Licras Deportivas H" className='h-20 w-20 mb-4 md:mb-0' />
            <div className='text-center md:text-left space-y-2'>
              <h1 className='text-white text-3xl font-semibold'>Licras Deportivas H</h1>
              <p className='text-white font-medium text-sm'>La mejor tienda de licras deportivas</p>
            </div>
          </div>

          <nav className='self-center'>
            <ul className='flex space-x-4 md:mt-0'>
              <li><a href="#inicio" className='text-white hover:text-blue-300 transition-colors duration-300'>Inicio</a></li>
              <li><a href="#productos" className='text-white hover:text-blue-300 transition-colors duration-300'>Productos</a></li>
              <li><a href="#contacto" className='text-white hover:text-blue-300 transition-colors duration-300'>Contactanos</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Espaciador para que el contenido no quede debajo del header */}
      <main className='pt-24'>

        {/* Sección de inicio */}
        <section id="inicio" className='min-h-screen pt-32 pb-24 px-6 flex flex-col justify-center items-center bg-gradient-to-b
        from-blue-50 to-white text-center space-y-6 scroll-mt-32'>
          <h3 className='text-5xl md:text-6xl font-extrabold text-gray-800'>Bienvenidos a Licras Deportivas H</h3>
          <p className='text-lg md:text-xl mb-8 max-w-2xl leading-relaxed'>Donde el movimiento se encuentra con el diseño.
            Explora una experiencia deportiva pensada para ti: prendas cómodas, funcionales y con estilo, creadas para acompañarte
            en cada entrenamiento, cada meta y cada logro.
            Nuestra misión es ofrecerte licras deportivas de alta calidad que te inspiren a alcanzar tu máximo potencial.
          </p>
          <h4 className='text-xl md:text-2xl mb-6 font-semibold'>Colores disponibles</h4>
          <div className='mx-auto max-w-4xl'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6'>
              <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-md shadow-md p-3'>
                <h3 className='text-lg font-semibold mb-2'>Para caballero</h3>
                <img src="/colores-caballero.png" className='w-full h-48 object-contain rounded-lg mb-4' />
              </div>
              <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-3'>
                <h3 className='text-lg font-semibold mb-2'>Para dama</h3>
                <img src="/colores-dama.png" className='w-full h-48 object-contain rounded-lg mb-4' />
              </div>
            </div>
          </div>
        </section>

        {/* Sección de productos */}
        <section id="productos" className='min-h-screen py-20 px-6 flex flex-col justify-center items-center bg-white text-center'>
          <h2 className='text-4xl md:text-4xl font-bold mb-4 tracking-wide'>Nuestros Productos</h2>
          <p className='text-lg md:text-xl mb-8 max-w-2xl leading-relaxed'>Descubre nuestra colección de licras deportivas, diseñadas para
            brindarte máxima comodidad, libertad de movimiento y un estilo moderno que se adapta a cada entrenamiento, ya sea para
            yoga, running o sesiones intensas en el gimnasio.</p>
          
          {/* Prendas para Mujer */}
          <h3 className='text-2xl md:text-3xl font-bold mb-6'>Prendas Mujer</h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6'>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Blusa Manga Corta</h3>
              <img src="/licras mujer/manga-corta.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $35.000</p>
              <span className='text-black'>Por Mayor: $17.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Blusa Manga Larga</h3>
              <img src="/licras mujer/manga-larga.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $40.000</p>
              <span className='text-black'>Por mayor: $20.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Top Licra Dama</h3>
              <img src="/licras mujer/top.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $15.000</p>
              <span className='text-black'>Por Mayor: $9.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Falda Short</h3>
              <img src="/licras mujer/falda-short.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $40.000</p>
              <span className='text-black'>Por Mayor: $20.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Leggins</h3>
              <img src="/licras mujer/leggins.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $30.000</p>
              <span className='text-black'>Por Mayor: $16.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Top En Tira</h3>
              <img src="/licras mujer/top-tira.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $20.000</p>
              <span className='text-black'>Por Mayor: $10.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Bicicletero</h3>
              <img src="/licras mujer/bicicletero.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $25.500</p>
              <span className='text-black'>Por mayor: $12.500</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-md shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Licra Hombliguera</h3>
              <img src="/licras mujer/hombliguera.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $28.000</p>
              <span className='text-black'>Por mayor: $17.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Beiker Licra</h3>
              <img src="/licras mujer/beiker.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $22.000</p>
              <span className='text-black'>Por mayor: $10.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Leggins + Blusa M/C</h3>
              <img src="/licras mujer/leggins-blusa.png" className='w-full h-48 object-contain mb-4' />
              <span className='text-black'>Precio: $57.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Leggins + Blusa Manga larga M/L</h3>
              <img src="/licras mujer/leggins-largo.png" className='w-full h-48 object-contain mb-4' />
              <span className='text-black'>Precio: $62.000</span>
            </div>
          </div>

          {/* Prendas para Hombre*/}
          <h3 className='text-2xl md:text-3xl font-bold my-6'>Prendas Hombre</h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6'>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Buso Manga Corta</h3>
              <img src="/licras hombre/manga-corta.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $35.000</p>
              <span className='text-black'>Por Mayor: $17.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Buso Manga Larga</h3>
              <img src="/licras hombre/manga-larga.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $40.000</p>
              <span className='text-black'>Por mayor: $20.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Esqueleto Manga Sisa</h3>
              <img src="/licras hombre/esqueleto-sisa.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $30.000</p>
              <span className='text-black'>Por mayor: $17.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Pantalon Corto Sin Tapa</h3>
              <img src="/licras hombre/corto-sin.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $25.000</p>
              <span className='text-black'>Por mayor: $12.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg p-4'>
              <h3 className='text-lg font-semibold mb-2'>Pantalon 3/4</h3>
              <img src="/licras hombre/pantalon-3.4.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $30.000</p>
              <span className='text-black'>Por mayor: $15.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Pantalon</h3>
              <img src="/licras hombre/pantalon.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $35.000</p>
              <span className='text-black'>Por mayor: $20.500</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Pantalon Corto Con Tapa</h3>
              <img src="/licras hombre/pcorto-con.png" className='w-full h-48 object-contain mb-4' />
              <p className='text-black'>Unidad: $27.000</p>
              <span className='text-black'>Por mayor: $15.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Buso M/L + Pantalon</h3>
              <img src="/licras hombre/buso-pantalon.png" className='w-full h-48 object-contain mb-4' />
              <span className='text-black'>Precio: $67.000</span>
            </div>
            <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-lg shadow-md p-4'>
              <h3 className='text-lg font-semibold mb-2'>Buso M/L + Pantalon Corto</h3>
              <img src="/licras hombre/buso-corto.png" className='w-full h-48 object-contain mb-4' />
              <span className='text-black'>Precio: $57.000</span>
            </div>
          </div>

          {/* Prendas para Niños */}
          <h3 className='text-2xl md:text-3xl font-bold my-6'>Prendas Niños</h3>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6'>
              <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-md shadow-md p-4'>
                <h3 className='text-lg font-semibold mb-2'>Pantalon Licra Niño</h3>
                {/*<img src="/licras niño/tapa-corto.png" className='w-full h-48 object-cover rounded-lg mb-4' />*/}
                <img src="/licras niño/tapa-corto.png" className='w-full h-48 object-contain mb-4' />
                <p className='text-black'>Unidad: $20.000</p>
                <span className='text-black'>Por Mayor: $12.000</span>
              </div>
              <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-md shadow-md p-4'>
                <h3 className='text-lg font-semibold mb-2'>Short Licra Niño</h3>
                <img src="/licras niño/short.png" className='w-full h-48 object-contain mb-4' />
                <p className='text-black'>Unidad: $12.000</p>
                <span className='text-black'>Por mayor: $7.000</span>
              </div>
              <div className='card bg-gradient-to-r from-blue-300 to-gray-500 rounded-md shadow-md p-4'>
                <h3 className='text-lg font-semibold mb-2'>Buso Licra + Pantalon Largo</h3>
                <img src="/licras niño/buso-largo.png" className='w-full h-48 object-contain mb-4' />
                <p className='text-black'>Unidad: $50.000</p>
              </div>
            </div>
          </div>        
        </section>
      </main>

      {/* Sección de contacto */}
      <section id="contacto" className='min-h-screen py-20 px-6 flex flex-col justify-center items-center bg-gradient-to-b
       from-white to-white text-center'>
        <h2 className='text-4xl md:text-4xl font-bold mb-4 tracking-wide'>Contactanos</h2>
        <p className='text-lg md:text-xl mb-8 max-w-2xl leading-relaxed'>¿Tienes alguna pregunta o necesitas más información?
          No dudes en contactarnos. Estamos aquí para ayudarte.
          </p>
      </section>

      <footer className='border-t'>
        <div className='text-black text-center p-4'>
          <p>&copy; 2025 Licras Deportivas H. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App
