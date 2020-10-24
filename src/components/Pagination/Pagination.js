import React from "react";

export default function Pagination(props) {
  return (
    <div className="py-3">
      <button
        type="button"
        className="btn btn-info mr-1"
        onClick={props.PreviewPag}
      >
        &larr; Anterior
      </button>
      <button
        type="button"
        className="btn btn-info mr-1"
        onClick={props.NetxPag}
      >
        Siguente &rarr;
      </button>
    </div>
  );
}
