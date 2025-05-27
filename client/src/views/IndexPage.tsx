function IndexPage() {
  return (
    <>
    <div className="text-center text-5xl text-emerald-600 uppercase font-bold">Somos Zarbel Group</div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="mb-8 leading-relaxed">
              Líderes en soluciones tecnológicas que conectan y transforman tu vida. Ofrecemos Internet satelital de alta velocidad para zonas urbanas y rurales, junto con sistemas de automatización que optimizan procesos en hogares y empresas. Además, integramos soluciones de domótica para crear espacios más seguros, cómodos y eficientes, todo gestionado desde tu dispositivo móvil.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-700 rounded text-lg">
                Contáctanos
              </button>
              
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://img.freepik.com/fotos-premium/foto-familia-joven-que-une-felizmente-mientras-usa-tableta-digital-sofa-casa_590464-932.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default IndexPage;
