import img from "../img/imagen-no-encontrada.jpg";
import {
  AiOutlineStar as EstrellaVacia,
  AiFillStar as EstrellaCompleta,
} from "react-icons/ai";

// CAPITALIZAR
export const capitalizar = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// RESPONSIVE CAROUSEL
export const cantidadTarjetas = () => {
  const tamañoPantalla = window.innerWidth;

  if (tamañoPantalla > 1300) {
    return 5;
  } else if (tamañoPantalla <= 1300 && tamañoPantalla > 1100) {
    return 4;
  } else if (tamañoPantalla <= 1100 && tamañoPantalla > 800) {
    return 3;
  } else if (tamañoPantalla <= 800 && tamañoPantalla > 500) {
    return 2;
  } else if (tamañoPantalla <= 500) {
    return 1;
  }
};

// URL DE IMAGENES
export const mostrarImagen = (resultado, tamaño) => {
  if (resultado.profile_path) {
    return `https://image.tmdb.org/t/p/${tamaño}${resultado.profile_path}`;
  } else if (resultado.poster_path) {
    return `https://image.tmdb.org/t/p/${tamaño}${resultado.poster_path}`;
  } else if (resultado.still_path) {
    return `https://image.tmdb.org/t/p/${tamaño}${resultado.still_path}`;
  } else {
    return img;
  }
};
// ARMADO DE RATING CON ESTRELLAS
export const estrellas = (valoracion) => {
  const estrellas = [];

  for (let i = 0; i < valoracion; i++) {
    estrellas.push(
      <div className="icono" key={i}>
        <EstrellaCompleta />
      </div>
    );
  }
  for (let i = 0; i < 10 - valoracion; i++) {
    estrellas.push(
      <div className="icono" key={i + 10}>
        <EstrellaVacia />
      </div>
    );
  }
  if (valoracion === 0) {
    return [];
  } else {
    return estrellas;
  }
};
