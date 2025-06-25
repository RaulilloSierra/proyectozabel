function Testimonial() {
  return (
    <>
      <div className="text-center text-5xl text-emerald-600 uppercase font-bold">
        Lo que opinan nuestros clientes
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_960_720.jpg"
                />
                <p className="leading-relaxed">
                  “Desde que contraté el servicio de Internet satelital, la
                  conexión en mi finca ha sido estable y rápida. Ahora puedo
                  trabajar desde casa sin interrupciones y mis hijos pueden
                  estudiar en línea sin problemas.”
                </p>
                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Camila Rincón
                </h2>
                <p className="text-gray-500">Emprendedora rural, Santander</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn.pixabay.com/photo/2013/11/08/04/59/office-207219_960_720.jpg"
                />
                <p className="leading-relaxed">
                  “Implementamos la automatización en nuestra oficina y ha sido
                  un cambio total. Controlamos luces, clima y seguridad desde el
                  celular. El equipo técnico fue muy profesional y todo quedó
                  funcionando a la perfección.”
                </p>
                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Luis Fernando Gómez
                </h2>
                <p className="text-gray-500">
                  Gerente de operaciones, Bogotá D.C.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn.pixabay.com/photo/2014/08/05/10/32/girl-410334_960_720.jpg"
                />
                <p className="leading-relaxed">
                  “Con la domótica instalada en mi casa, ahora me siento más
                  segura y cómoda. Puedo revisar las cámaras, apagar luces y
                  ajustar la temperatura desde mi móvil. ¡Un servicio excelente
                  y muy fácil de usar!”
                </p>
                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  María Alejandra Herrera,
                </h2>
                <p className="text-gray-500">Ama de casa, Medellín.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
