import { Carousel } from "flowbite-react";
import React from "react";
import banner1 from "../assets/portada.jpg";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="mr-2">
              <img src={banner1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold mb-4 text-brandPrimary md:w-3/4 leading-snug">
                PENSANDO EN  {" "}
                <span className="text-4xl text-brandPrimary leading-snug">
                    TU <span className="text-4xl text-secundaryColor leading-snug">SALUD</span> Y <span className="text-4xl text-secundaryColor leading-snug">FAMILIA</span>
                </span>
            </h1>
              <p className="text-neutralGrey text-base mb-8">
              Ofreciendo siempre la mejor atención

              </p>
              <button className="btn-primary">Mas Info</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="mr-2">
              <img src={banner1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold mb-4 text-brandPrimary md:w-3/4 leading-snug">
                PENSANDO EN  {" "}
                <span className="text-4xl text-brandPrimary leading-snug">
                    TU <span className="text-4xl text-secundaryColor leading-snug">SALUD</span> Y <span className="text-4xl text-secundaryColor leading-snug">FAMILIA</span>
                </span>
            </h1>
              <p className="text-neutralGrey text-base mb-8">
              Ofreciendo siempre la mejor atención
              </p>
              <button className="btn-primary">Mas info</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="mr-2">
              <img src={banner1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold mb-4 text-brandPrimary md:w-3/4 leading-snug">
                PENSANDO EN  {" "}
                <span className="text-4xl text-brandPrimary leading-snug">
                    TU <span className="text-4xl text-secundaryColor leading-snug">SALUD</span> Y <span className="text-4xl text-secundaryColor leading-snug">FAMILIA</span>
                </span>
            </h1>
              <p className="text-neutralGrey text-base mb-8">
              Ofreciendo siempre la mejor atención
              </p>
              <button className="btn-primary">Mas Info</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
