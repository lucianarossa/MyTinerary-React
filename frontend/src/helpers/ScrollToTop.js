import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//uselocation tiene la capacidad de reconocer en que ruta estas

export default function ScrollToTop() {
  const { pathname } = useLocation();

  //useeffect tiene la capacidad de reconocer si una variable cambia se dispara la funcion del useeffect

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

//retorna null porque es una funcion que no necesitamos que devuelva nada en especifico.