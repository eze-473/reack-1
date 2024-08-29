import Teoria from "./Teoria";

const Informacion = () => {
  //logica de pogracmacion
const anio = new Date().getFullYear()
  return (
    //html
    <section>
      <h2>introducion a reack</h2>
      <p>
        React es una biblioteca de JavaScript desarrollada por Facebook para
        construir interfaces de usuario. Se destaca por su enfoque en la
        creación de aplicaciones web de una sola <strong>página SPA </strong> y su capacidad para
        manejar la interfaz de manera eficiente mediante el uso de un <span className="parraforesaltado "> DOM
        virtual </span>. React permite a los desarrolladores construir interfaces
        dinámicas y reactivas de forma modular, lo que facilita el desarrollo y
        el mantenimiento de aplicaciones a gran escala.
      </p>
      <Teoria comision="101i" anioactual={anio}></Teoria>
    </section>
  );
};

export default Informacion;
