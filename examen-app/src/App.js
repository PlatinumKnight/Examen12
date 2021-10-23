import React, { Component } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Ticket from "./components/Ticket";

export default class app extends Component {
  constructor() {
    super();
    this.state = {
      compra: {},
      cartelera: [
        {
          codigo: 1,
          nombre: "Halloween Kills",
          idioma: "SUB",
          clasificacion: "C",
          horarios: ["13:00", "17:50", "20:30"],
          duracion: "106 min",
          url: "https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg",
        },
        {
          codigo: 2,
          nombre: "Los Locos Addams 2",
          idioma: "ESP",
          clasificacion: "A",
          horarios: ["9:00", "11:30", "13:30"],
          duracion: "93 min",
          url: "https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg",
        },
        {
          codigo: 3,
          nombre: "Sin Tiempo Para Morir",
          idioma: "ESP",
          clasificacion: "B",
          horarios: ["11:00", "13:50", "19:40"],
          duracion: "164 min",
          url: "https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg",
        },
        {
          codigo: 4,
          nombre: "Venom: Carnage Liberado",
          idioma: "ESP",
          clasificacion: "B",
          horarios: ["10:30", "14:20", "18:30"],
          duracion: "98 min",
          url: "https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg",
        },
      ],
    };
  }

  agregar = (ecodigo, horarios) => {
    const ListCine = {
      codigo: ecodigo.codigo,
      nombre: ecodigo.nombre,
      idioma: ecodigo.idioma,
      clasificacion: ecodigo.clasificacion,
      horario: horarios,
      cantidad: 0,
      duracion: ecodigo.duracion,
      total: 0,
    };
    this.setState({
      ...this.state,
      compra: ListCine,
    });
  };

  calcular = (ecodigo, pelicula) => {
    let precio;

    if (pelicula.clasificacion === "A") {
      precio = 50;
    } else if (pelicula.clasificacion === "B") {
      precio = 80;
    } else if (pelicula.clasificacion === "C") {
      precio = 95;
    }

    const ListCine = {
      codigo: pelicula.codigo,
      nombre: pelicula.nombre,
      idioma: pelicula.idioma,
      clasificacion: pelicula.clasificacion,
      horario: pelicula.horario,
      cantidad: ecodigo,
      duracion: pelicula.duracion,
      total: ecodigo * precio,
    };

    if (ecodigo >= 0 && ecodigo <= 0) {
      ListCine.total = 0;
    }

    this.setState({
      ...this.state,
      compra: ListCine,
    });
  };

  eliminarCompra = () => {
    this.setState({
      ...this.state,
      compra: [],
    });
  };

  comprar = (pelicula) => {
    if (pelicula.cantidad <= 0) {
      alert("Ingrese cantidad");
    } else if (pelicula.cantidad > 0) {
      this.setState({
        ...this.state,
        compra: [],
      });
      alert("Disfrute su pelicula");
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="div1">
          <Movies cartelera={this.state.cartelera} agregar={this.agregar} />
        </div>
        <div className="div2">
          <Ticket
            compra={this.state.compra}
            calcular={this.calcular}
            comprar={this.comprar}
            eliminarCompra={this.eliminarCompra}
          />
        </div>
      </div>
    );
  }
}
