import { Carousel } from "flowbite-react";

import banner1 from "../assets/portada.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver mb-10">
       <div className="relative">
        <Carousel className="w-full h-screen">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
  {/* hero text */}
  <div className=" ml-24 md:w-1/2 hidden md:block">
  <h1 className="text-5xl font-bold mb-4 text-brandPrimary md:w-3/4 leading-snug">
  PENSANDO EN{" "}<br/>
  <span className="text-5xl text-brandPrimary leading-snug">TU</span>{" "}
  <span className="text-5xl text-secundaryColor leading-snug">SALUD</span> Y{" "}
  <span className="text-5xl text-secundaryColor leading-snug">FAMILIA</span>
</h1>
    <p className="text-neutralGrey text-3xl mb-8">
      Ofreciendo siempre la mejor atención
    </p>
    <button className="btn-primary text-lg">Mas Info</button>
  </div>
  <div className="md:w-1/2 flex justify-center items-center md:mt-36">
    <img src={banner1} alt="" className="h-screen w-screen" />
  </div>
</div>
<div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
  {/* hero text */}
  <div className=" ml-24 md:w-1/2 hidden md:block">
  <h1 className="text-5xl font-bold mb-4 text-brandPrimary md:w-3/4 leading-snug">
  PENSANDO EN{" "}<br/>
  <span className="text-5xl text-brandPrimary leading-snug">TU</span>{" "}
  <span className="text-5xl text-secundaryColor leading-snug">SALUD</span> Y{" "}
  <span className="text-5xl text-secundaryColor leading-snug">FAMILIA</span>
</h1>
    <p className="text-neutralGrey text-3xl mb-8">
      Ofreciendo siempre la mejor atención
    </p>
    <button className="btn-primary text-lg">Mas Info</button>
  </div>
  <div className="md:w-1/2 flex justify-center items-center md:mt-36">
    <img src={banner1} alt="" className="h-screen w-screen" />
  </div>
</div>
<div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
  {/* hero text */}
  <div className=" ml-24 md:w-1/2 hidden md:block">
  <h1 className="text-5xl font-bold mb-4 text-brandPrimary md:w-3/4 leading-snug">
  PENSANDO EN{" "}<br/>
  <span className="text-5xl text-brandPrimary leading-snug">TU</span>{" "}
  <span className="text-5xl text-secundaryColor leading-snug">SALUD</span> Y{" "}
  <span className="text-5xl text-secundaryColor leading-snug">FAMILIA</span>
</h1>
    <p className="text-neutralGrey text-3xl mb-8">
      Ofreciendo siempre la mejor atención
    </p>
    <button className="btn-primary text-lg">Mas Info</button>
  </div>
  <div className="md:w-1/2 flex justify-center items-center md:mt-36">
    <img src={banner1} alt="" className="h-screen w-screen" />
  </div>
</div>
        </Carousel>
        {/* Barra azul */}
        
        
          
        <div className="absolute bottom-0 left-0 w-full bg-brandPrimary text-white py-8 px-4 text-center ">
  <p className="text-sm  md:text-2xl font-teko md:mr-52 md:ml-52 md:leading-none
  ">El Centro Medico Integral Liniers es un espacio dedicado al bienestar y la salud holística de sus pacientes. Nuestro objetivo es ofrecer una atención integral y personalizada que abarca todas las dimensiones de la salud física, mental y emocional. En el Centro Medico Integral Liniers, nos comprometemos a proporcionar servicios de alta calidad en un ambiente acogedor y seguro, donde cada paciente se sienta valorado y escuchado.</p>
</div>
        </div>
    </div>
  );
};
export default Home;
