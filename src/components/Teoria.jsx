const Teoria = ({comision, anioactual}) => {
   
  return (
    <article>
      <h2>componetes</h2>
      <p>
        parraforesaltadoCada componente en React puede tener su propio estado
        (state) y propiedades (props). El estado es una forma de almacenar y
        manejar datos internos del componente, mientras que las propiedades son
        datos que se pasan de un componente padre a un componente hijo. Al
        combinar estos elementos, React permite la creación de interfaces
        interactivas, donde los cambios en los datos se reflejan automáticamente
        en la interfaz de usuario.
      </p>
      <h4>comision:{comision}</h4>
    </article>
  );
};

export default Teoria;
