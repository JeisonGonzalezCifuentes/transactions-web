const Hero = () => (
    <section className="flex flex-col items-center justify-center text-center bg-[#292b2a] bg-opacity-80 rounded-lg shadow-lg py-6 px-4 md:py-12 md:px-8 mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-[#03ff94] mb-4">
        Bienvenido a tu panel de gestión de cuentas
      </h1>
      <p className="text-lg md:text-xl text-white max-w-2xl mb-4">
        Aquí puedes administrar y consultar fácilmente las transacciones y detalles de cuentas.
      </p>
      <div className="text-white mt-4 flex items-center justify-center">
        <span className="border-l-2 border-[#03ff94] pl-4 text-lg">
          Transacciones al instante
        </span>
      </div>
    </section>
  );
  
  export default Hero;
  