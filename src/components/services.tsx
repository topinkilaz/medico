import { Carousel } from "flowbite-react";
import atencion from "../assets/atencion.png";

import esp1 from "../assets/esp1.png";
import esp2 from "../assets/esp2.jpg";
import esp3 from "../assets/esp3.jpg";
const Services = () => {
  return (
    <div className="bg-neutralSilver mb-10">
      <div className="relative">
        <Carousel className="w-full h-screen">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 flex justify-center items-center md:mt-36">
              <img src={esp1} alt="" className="h-screen w-screen" />
            </div>
            {/* hero text */}
            <div className=" text-center md:w-1/2 hidden md:block mr-8 ml-8">
              <h1 className="text-4xl font-bold mb-4 text-brandPrimary md:w-3/4 leading-snug text-right">
                CLINICA{" "}
                <span className="  text-4xl text-secundaryColor leading-snug">
                  MEDICA
                </span>
              </h1>
              <p className="text-neutralGrey text-2xl mb-8 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                velit quam, blandit a ornare sed, sollicitudin ac odio. Integer
                tincidunt nisl dui, et sagittis orci iaculis ut. Sed sit amet
                porttitor odio. Praesent tempus sapien non massa fermentum
                tincidunt. Cras at eros venenatis, hendrerit lectus vitae,
                finibus felis. Sed semper congue erat. Fusce sed porta enim.
              </p>
              <button className="btn-primary text-lg">Mas Info</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 flex justify-center items-center md:mt-36">
              <img src={esp2} alt="" className="h-screen w-screen" />
            </div>
            {/* hero text */}
            <div className=" text-center md:w-1/2 hidden md:block mr-8 ml-8">
              <h1 className="text-4xl font-bold mb-4 text-brandPrimary md:w-3/4 leading-snug text-right">
                CARDIO
                <span className="  text-4xl text-secundaryColor leading-snug">
                  LOGÍA
                </span>
              </h1>
              <p className="text-neutralGrey text-2xl mb-8 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                velit quam, blandit a ornare sed, sollicitudin ac odio. Integer
                tincidunt nisl dui, et sagittis orci iaculis ut. Sed sit amet
                porttitor odio. Praesent tempus sapien non massa fermentum
                tincidunt. Cras at eros venenatis, hendrerit lectus vitae,
                finibus felis. Sed semper congue erat. Fusce sed porta enim.
              </p>
              <button className="btn-primary text-lg">Mas Info</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 flex justify-center items-center md:mt-36">
              <img src={esp3} alt="" className="h-screen w-screen" />
            </div>
            {/* hero text */}
            <div className=" text-center md:w-1/2 hidden md:block mr-8 ml-8">
              <h1 className="text-4xl font-bold mb-4 text-brandPrimary md:w-3/4 leading-snug text-right">
               OFTALMO
                <span className="  text-4xl text-secundaryColor leading-snug">
                  LOGÍA
                </span>
              </h1>
              <p className="text-neutralGrey text-2xl mb-8 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                velit quam, blandit a ornare sed, sollicitudin ac odio. Integer
                tincidunt nisl dui, et sagittis orci iaculis ut. Sed sit amet
                porttitor odio. Praesent tempus sapien non massa fermentum
                tincidunt. Cras at eros venenatis, hendrerit lectus vitae,
                finibus felis. Sed semper congue erat. Fusce sed porta enimkhgfjhgfjhgfjhgjf.
              </p>
              <button className="btn-primary text-lg">Mas Info</button>
            </div>
          </div>
        
        </Carousel>
        <div className=" mt-5 flex justify-center items-center">
          <div className=" flex relative  w-full sm:w-5/6 bg-neutralSilver text-black py-16 px-9 pb-4 text-center border border-black">
            <div className="absolute top-0 left-0 bg-brandPrimary w-52 text-white py-2">
              {" "}
              ACLARACIÓN
            </div>
            <div className="text-start">
              <p className=" text-brandPrimary ">
                Para mayor información no dudes en comunicarte con nosotros{" "}
              </p>
              <p className=" text-brandPrimary ">
                <span className=" font-bold">WhastApp:</span> 11 5368-0059
              </p>
              <p className=" text-brandPrimary ">
                <span className="font-bold">Teléfono:</span> 4612-0383
              </p>
            </div>
            <div className="image-container absolute top-0 right-0 bottom-0 w-96">
              <img
                className="h-full w-full object-cover"
                src={atencion}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
