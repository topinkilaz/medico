import esp1 from "../assets/esp1.png"
import esp2 from "../assets/esp2.jpg"
import esp3 from "../assets/esp3.jpg"
const Especialidades = () => {
    return (
        <div id="especialidades">
                

<div className=" bottom-0 left-0 w-full bg-brandPrimary text-white py-8 px-4 text-center ">
  <p className=" text-lg  md:text-5xl font-teko md:mr-52 md:ml-52 md:leading-none text-start tracking-wider
  ">ESPECIALIDADES</p>
</div>
   
        <div className=" bg-neutralSilver grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-neutralSilver p-4">
            <img src={esp1} alt="" />
        </div>
        <div className=" bg-neutralSilver p-4 text-center"><span className=" text-brandPrimary font-bold">CARDIOLOGIA</span><p > Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Duis velit quam, blandit a ornare sed, sollicitudin
ac odio. Integer tincidunt nisl dui, et sagittis orci iaculis
ut. Sed sit amet porttitor odio. Praesent tempus sapien
non massa fermentum tincidunt. Cras at eros venenatis,
hendrerit lectus vitae, finibus felis. Sed semper congue
erat. Fusce sed porta enim.</p></div>
        <div className="bg-neutralSilver p-4"><img src={esp3} alt="" /></div>
        <div className="bg-neutralSilver p-4 text-center"><span className=" text-brandPrimary font-bold">CLINICA MEDICA</span> <p > Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Duis velit quam, blandit a ornare sed, sollicitudin
ac odio. Integer tincidunt nisl dui, et sagittis orci iaculis
ut. Sed sit amet porttitor odio. Praesent tempus sapien
non massa fermentum tincidunt. Cras at eros venenatis,
hendrerit lectus vitae, finibus felis. Sed semper congue
erat. Fusce sed porta enim.</p></div>
        <div className="bg-neutralSilver p-4"><img src={esp2} alt="" /></div>
        <div className="bg-neutralSilver p-4 text-center"><span className=" text-brandPrimary font-bold"> OFTALMOLOGIA</span><p > Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Duis velit quam, blandit a ornare sed, sollicitudin
ac odio. Integer tincidunt nisl dui, et sagittis orci iaculis
ut. Sed sit amet porttitor odio. Praesent tempus sapien
non massa fermentum tincidunt. Cras at eros venenatis,
hendrerit lectus vitae, finibus felis. Sed semper congue
erat. Fusce sed porta enim.</p></div>
      </div>
    
      </div>
    );
  };
  export default Especialidades;
  