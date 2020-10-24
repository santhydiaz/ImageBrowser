import { useEffect, useState } from "react";
import Buscador from "./components/Browser/Browser";
import Resultado from "./components/Result/Result";

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [pagination, setPagination] = useState(0);

  const scroll = () => {
    const element = document.querySelector(".jumbotron");
    element.scrollIntoView("smoot", "end");
  };

  const NetxPag = () => {
    let numberPagination = pagination;
    numberPagination++;
    setPagination(numberPagination);
  };

  const PreviewPag = () => {
    let numberPagination = pagination;
    numberPagination--;
    if (numberPagination >= 1) setPagination(numberPagination);
  };

  useEffect(() => {
    api();
    scroll();
  }, [pagination]);

  const datosTermino = (termino) => {
    setQuery(termino);
    setPagination(1);
  };

  const api = () => {
    const key = "18833267-330e7b422137a55e2281fc7ab";
    const queryApi = query;
    const Querypagination = pagination;
    if (queryApi !== "") {
      const url = `https://pixabay.com/api/?key=${key}&q=${queryApi}&per_page=20&page=${Querypagination}`;
      fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => setImages(resultado.hits));
    }
  };

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>
        <Buscador datosBusqueda={datosTermino} />
      </div>
      <div className="row justify-content-center">
        <Resultado images={images} NetxPag={NetxPag} PreviewPag={PreviewPag} />
      </div>
    </div>
  );
}
