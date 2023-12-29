import "../css/navbar.css";
import logoweb from "../icons/web-logo.svg"
import Image from "next/image";
import heart from "../icons/heart.svg"

const Navegacion = ({ children }) => {
  return (
        <nav className="container-navegacion">
            <Image className="logo-web" src={logoweb}></Image>
            <section className="container-sections">
                <a className="section" href="">Servicios</a>
                <a className="section" href="">Sobre Nosotros</a>
                <a className="section" href="">Blog</a>
                <a className="section" href="">Contacto</a>
             </section>
             <a className="btn-join" href=""><Image src={heart}></Image>Unirme</a>
        </nav>
  );
};

export default Navegacion;
