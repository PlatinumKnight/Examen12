import React from "react";

const Movies = (props) => {
  const { cartelera, agregar } = props;

  return (
    <div className="ListMain">
      <h1>Cartelera</h1>
      {cartelera.map((e, index) => (
        <>
          <div className="CardC" key={index}>
            <div className="imgContainer">
              <img className="img" src={e.url} />
            </div>
            <div>
              <p>{e.nombre}</p>
              <p>{e.idioma}</p>
              <p>{e.clasificacion}</p>
              <p>{e.duracion}</p>
              <div>
                {e.horarios.map((hora, index) => (
                  <button
                    className="btn btn-light m-2"
                    key={index}
                    onClick={() => agregar(e, hora)}
                  >
                    {hora}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Movies;
