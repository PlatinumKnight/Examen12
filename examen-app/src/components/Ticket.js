import React from "react";

const Ticket = (props) => {
  const { compra, comprar, calcular, eliminarCompra } = props;

  return (
    <>
      <div className="CardTik">
        {Object.keys(compra).length !== 0 ? (
          <>
            <div className="CardN">
              <p>
                <strong>{compra.nombre}</strong> ({compra.idioma})
              </p>
              <p>
                <strong>Hora: </strong>
                {compra.horario}
              </p>
              <p>
                <strong>Cantidad: </strong>
                <input
                  type="number"
                  value={compra.cantidad}
                  min="1"
                  max="10"
                  onChange={(e) => calcular(e.target.value, compra)}
                />
              </p>
              <p>
                <strong>Total: </strong>${compra.total}
              </p>
              <div className="">
                <button
                  className="btn btn-light m-2"
                  onClick={() => eliminarCompra()}
                >
                  Cancelar
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => comprar(compra)}
                >
                  Comprar
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>
            <p>
              <strong>Seleccione una opcion porfavor</strong>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Ticket;
