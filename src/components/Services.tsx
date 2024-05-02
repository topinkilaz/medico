import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import esp1 from "../assets/esp1.png";
import esp2 from "../assets/esp2.jpg";
import esp3 from "../assets/esp3.jpg";
import atencion from "../assets/atencion.png";
const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      image1: esp1,
      text: (
        <div className=' text-center'>
         <h1 className="text-lg font-bold"><span className=' text-secundaryColor'>CIRUGIA</span> GENERAL</h1>
          <p className="text-gray-600"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.</p>
              <p className=" text-brandPrimary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet blandit leo lobortis eget .</p>
        </div>
      ),
      image2: esp2,
    },
    {
      image1: esp3,
      text: (
        <div className=' text-center'>
          <h1 className="text-lg font-bold"><span className=' text-secundaryColor'>ODONTO</span>LOGÍA</h1>
          <p className=" text-brandPrimary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget .</p>
              <p className=" text-brandPrimary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet blandit leo lobortis eget .</p>
        </div>
      ),
      image2: esp1,
    },
    {
        image1: esp3,
        text: (
          <div className=' text-center'>
            <h1 className="text-lg font-bold"><span className=' text-secundaryColor'>ODONTO</span>LOGÍA</h1>
            <p className=" text-brandPrimary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget .</p>
                <p className=" text-brandPrimary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                sit amet blandit leo lobortis eget .</p>
          </div>
        ),
        image2: esp1,
      },
  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % items.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  return (
    <div id="Servicios" className=" bg-neutralSilver">
      <div className=" bottom-0 left-0 w-full bg-brandPrimary text-white py-8 px-4 text-center ">
        <p className=" text-lg md:text-5xl font-teko md:mr-52 md:ml-52 md:leading-none text-start tracking-wider ">
          SERVICIOS
        </p>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 relative">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4 }}
            className="w-full h-full absolute flex"
          >
            <div className="w-1/3 h-full">
              <img
                src={items[currentIndex].image1}
                alt="..."
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/3 h-full flex items-center justify-center">
              {items[currentIndex].text}
            </div>
            <div className="w-1/3 h-full">
              <img
                src={items[currentIndex].image2}
                alt="..."
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center absolute inset-x-0 bottom-4">
          
        {/*<button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={handlePrevious}
          >
            Anterior
  </button>*/}
          <div className="flex">
            {items.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
          {/*}
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={handleNext}
          >
            Siguiente
          </button>*/}
        </div>
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
  );
};

export default Services;