import React from "react";

const DestinationItem = ({nombre, pais, precio, deleteDestino}) => {
  return <article>
<span>{nombre}</span>
<span>{pais}</span>
<span>{precio}</span>
<button onClick={deleteDestino}>borrar</button>

  </article>;

};

export default DestinationItem;
