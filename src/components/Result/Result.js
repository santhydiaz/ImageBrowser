import React, { useEffect, useState } from "react";
import Imagen from "../Imagen/Imagen";
import Pagination from "../Pagination/Pagination";

export default function Result(props) {
  const [existImg, setExistImg] = useState(false);
  const images = props.images;

  useEffect(() => {
    validateImg();
  });

  const validateImg = () => {
    if (images.length > 0) {
      setExistImg(true);
    }
  };

  return (
    <>
      {existImg && (
        <>
          <div className="col-12 p-5 row">
            {images.map((img) => (
              <Imagen key={img.id} src={img} />
            ))}
          </div>
          <Pagination NetxPag={props.NetxPag} PreviewPag={props.PreviewPag} />
        </>
      )}
    </>
  );
}
