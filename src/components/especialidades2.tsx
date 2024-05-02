import { Carousel } from "flowbite-react";
import atencion from "../assets/atencion.png";

import esp1 from "../assets/esp1.png";
import esp2 from "../assets/esp2.jpg";
import esp3 from "../assets/esp3.jpg";
const Services = () => {
  return (
    <div className="bg-neutralSilver ">
      <div className="relative">
        <div className="w-full h-screen flex justify-center items-center sm:py-16 lg:py-0">
        <Carousel >
        <div className=" lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-neutralSilver lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-40 shadow-xl">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={esp1}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20 space-y-6 text-gray-500">
            <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-brandPrimary md:w-3/4 leading-snug lg:text-right md:text-right">
                CLINICA{" "}
                <span className="  text-4xl text-secundaryColor leading-snug">
                  MEDICA
                </span>
              </h1>
            <p className="text-lg">
              El{" "}
              <span className="text-secundaryColor">
                Centro Médico Integral Liniers
              </span>{" "}
              Dictum urna sed consectetur neque tristique pellentesque. Blandit
              amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus
              morbi vel porttitor vitae ut. Amet vit.
            </p>
            <p className="text-lg leading-7">
              Sollicitudin tristique eros erat odio sed vitae, consequat turpis
              elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu
              viverra donec ut volutpat donec laoreet quam urna. Sollicitudin
              tristique
            </p>
            <button className="btn-primary text-lg">Mas Info</button>
          </div>
          </div>
        </div>
      </div>
     <div className=" lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-40 shadow-xl">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={esp2}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20 space-y-6 text-gray-500">
            <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-brandPrimary md:w-3/4 leading-snug lg:text-right md:text-right">
                CARDIO
                <span className="  text-4xl text-secundaryColor leading-snug">
                  LOGÍA
                </span>
              </h1>
            <p className="text-lg">
              El{" "}
              <span className="text-secundaryColor">
                Centro Médico Integral Liniers
              </span>{" "}
              Dictum urna sed consectetur neque tristique pellentesque. Blandit
              amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus
              morbi vel porttitor vitae ut. Amet vit.
            </p>
            <p className="text-lg leading-7">
              Sollicitudin tristique eros erat odio sed vitae, consequat turpis
              elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu
              viverra donec ut volutpat donec laoreet quam urna. Sollicitudin
              tristique
            </p>
            <button className="btn-primary text-lg">Mas Info</button>
          </div>
          </div>
        </div>
      </div>
      <div className=" lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-40 shadow-xl">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={esp3}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20 space-y-6 text-gray-500">
            <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-brandPrimary md:w-3/4 leading-snug lg:text-right md:text-right">
               OFTALMO
                <span className="  text-4xl text-secundaryColor leading-snug">
                  LOGÍA
                </span>
              </h1>
            <p className="text-lg">
              El{" "}
              <span className="text-secundaryColor">
                Centro Médico Integral Liniers
              </span>{" "}
              Dictum urna sed consectetur neque tristique pellentesque. Blandit
              amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus
              morbi vel porttitor vitae ut. Amet vit.
            </p>
            <p className="text-lg leading-7">
              Sollicitudin tristique eros erat odio sed vitae, consequat turpis
              elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu
              viverra donec ut volutpat donec laoreet quam urna. Sollicitudin
              tristique
            </p>
            <button className="btn-primary text-lg">Mas Info</button>
          </div>
          </div>
        </div>
      </div>
      
        
        </Carousel>
      </div>
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
