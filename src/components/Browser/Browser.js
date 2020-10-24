import React, { useRef } from "react";

export default function Browser(props) {
  const busquedaRef = useRef(null);
  const handleGetData = (e) => {
    e.preventDefault();
    const termino = busquedaRef.current.value;
    props.datosBusqueda(termino);
  };
  return (
    <form onSubmit={handleGetData}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            ref={busquedaRef}
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca tu imagen. Ejemplo: futbol"
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="form-control form-control-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
    </form>
  );
}
