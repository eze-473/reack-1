//hook
import { useState } from "react";
const Contador = () => {
    const[numero, setnumero]=useState(1);
    const sumar = () =>{
        setnumero(numero + 1)
        console.log(numero)
    }
    //crear estados hooks
    return (
     <section>
        <h2>Contador</h2>
        <h4>{numero}
        </h4>
        <button className="btm btn-primary" onClick={sumar}> +1</button>
        <button className="btm btn-primary" onClick={()=>setnumero(numero-1)}>-1</button>
     </section>
    );
};

export default Contador;