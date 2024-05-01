import portada2 from "../assets/portada11.jpg";
import atencion from "../assets/atencion.png";
const Description = () => {
  return (
    <div className="bg-neutralSilver py-10 " id="descripcion">
      <div className="relative">
        {/* Barra azul */}

        <div className="relative bottom-0 left-0 w-full bg-brandPrimary text-white py-8 px-4 text-center ">
          <p className=" text-sm md:text-4xl tracking-wider">
            Bienvenido al{" "}
            <span
              className="text-sm  md:text-6xl font-teko md:leading-none
    tracking-wider"
            >
              CENTRO MÉDICO{" "}
              <span className="text-secundaryColor tracking-widest">
                INTEGRAL{" "}
              </span>
              LINIERS
            </span>
          </p>
        </div>
      </div>
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
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
                src={portada2}
                alt=""
              />
              {/*
                <div className="absolute inset-0 bg-#91CDEF mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-brandPrimary via-white opacity-90" />
                
                <div className="relative px-8">
                  <div>
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation.svg?color=blue"
                    alt="Workcation"
                  />
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                        Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                      </p>
                    </div>
  
                    <footer className="mt-4">
                      <p className="text-base font-semibold text-indigo-200">Sarah Williams, CEO at Workcation</p>
                    </footer>
                  </blockquote>
                </div>
                */}
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20 space-y-6 text-gray-500">
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
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className=" flex relative  w-full sm:w-5/6 bg-neutralSilver text-black py-16 px-9 pb-4 text-center border border-black">
          <div className="absolute top-0 left-0 bg-brandPrimary w-52 text-white py-2">
            {" "}
            SISTEMA DE TURNOS
          </div>
          <div className="text-start">
          <p className=" text-brandPrimary ">
          Atención personalizada por WhastApp de <span className=" text-secundaryColor">Lunes a sábado de 8:00 a 20:00 horas</span>
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
  );
};

export default Description;
