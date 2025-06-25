function About() {
  return (
    <>
      <div className="text-center text-5xl text-emerald-600 uppercase font-bold">
        acerca de nosotros
      </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Mision
            </h1>
            <p className="mb-8 leading-relaxed">
              Brindar soluciones tecnológicas innovadoras que conecten a las
              personas con un mundo más eficiente, seguro y accesible. Nuestra
              misión es ofrecer Internet satelital de alta velocidad, incluso en
              zonas rurales o de difícil acceso, junto con sistemas de
              automatización y domótica que transformen hogares y empresas en
              espacios inteligentes. Nos enfocamos en facilitar la vida diaria
              de nuestros clientes mediante tecnología confiable, intuitiva y
              adaptada a sus necesidades específicas.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.pixabay.com/photo/2022/04/04/16/24/technology-7111765_960_720.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Visión
            </h1>
            <p className="mb-8 leading-relaxed">
              Convertirnos en referentes del sector tecnológico en América
              Latina, siendo reconocidos por conectar comunidades y transformar
              entornos a través de soluciones integrales en conectividad,
              automatización y domótica. Aspiramos a impulsar el desarrollo
              social y económico mediante la inclusión digital, acercando la
              tecnología a cada rincón del territorio y fomentando un futuro más
              conectado, sostenible e inteligente para todos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
