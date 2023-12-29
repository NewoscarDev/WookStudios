import "../css/home.css";
import Image from "next/image";
import servidor from "../icons/servidor.svg"
import supporticon from "../icons/support.svg"
import Atropos from 'atropos';
import client from "../icons/client.svg"
import check from "../icons/check.svg"
const Inicio = ({ children }) => {
  return (
        <main className="container-main">
            <div className="container-1">
                <section className="info-container">
                    <h1 className="titulo-info">
                        Conectamos tus <color className="color-font">sueños digitales</color> con la velocidad y confiaza de nuestros especialistas 
                    </h1>
                    <h3 className="descripcion-info">
                        Da el primer paso hacia el éxito: ¡Comienza a colaborar con nosotros en cualquier momento!
                    </h3>
                    <section className="container-btn-info">    
                        <a className="btn-1" href="">Get Started</a>
                        <a href=""></a>
                    </section>
                </section>
                <Image src={servidor} className="imagen-container"></Image>
            </div>


            <div className="container-2">
                <div className="container-card">
                    <section className="titulo-card">
                        <section className="container-imagen">
                            <Image src={supporticon} className="image-card"></Image>
                        </section>
                        <h2 className="title-card">Soporte 24/7</h2>
                    </section>
                    <p className="descripcion-card">
                    Ponemos a su disposición un excepcional servicio 
                    de soporte disponible las 24 horas, los 7 días de 
                    la semana. 
                    </p>
                </div>  

                <div className="container-card">
                    <section className="titulo-card">
                        <section className="container-imagen">
                            <Image src={supporticon} className="image-card"></Image>
                        </section>
                        <h2 className="title-card">Rapido y Eficaz</h2>
                    </section>
                    <p className="descripcion-card">
                    Gracias a nuestro destacado equipo de especialistas en el desarrollo de software os creamos rapido el producto.
                    </p>
                </div>  

                <div className="container-card">
                    <section className="titulo-card">
                        <section className="container-imagen">
                            <Image src={supporticon} className="image-card"></Image>
                        </section>
                        <h2 className="title-card">Soporte 24/7</h2>
                    </section>
                    <p className="descripcion-card">
                        Provides a plugin to customize 
                        default themes, you can change all 
                        semantic tokens or create an entire 
                        new theme.
                    </p>
                </div>  

                <div className="container-card">
                    <section className="titulo-card">
                        <section className="container-imagen">
                            <Image src={supporticon} className="image-card"></Image>
                        </section>
                        <h2 className="title-card">Soporte 24/7</h2>
                    </section>
                    <p className="descripcion-card">
                        Provides a plugin to customize 
                        default themes, you can change all 
                        semantic tokens or create an entire 
                        new theme.
                    </p>
                </div>  
            </div>
            <div className="container-3">
                <Image  src={client} className="imagen-container"></Image>
                <section className="info-container">
                    <h1 className="titulo-info">
                    Convierte <color className="font-color-2">visitantes </color>en clientes con nuestra experiencia en diseño web.
                    </h1>
                    <h3 className="descripcion-info">
                    En WookStudios, perfeccionamos cada detalle con dedicación para ofrecer a nuestros clientes el mejor producto de manera rápida y conveniente. Nos comprometemos a brindar una experiencia excepcional, donde la excelencia se une a la eficiencia.
                    </h3>
                    <section className="container-btn-info">    
                        <a className="btn-1" href="">Productos</a>
                        <a className="btn-2" href=""></a>
                    </section>
                </section>
            </div>
            <div className="container-4">
                <h1 className="title-section-4">Productos frecuentes</h1>
                <div className="container-products">
                    <div className="producto">
                        <h2 className="name-product">Cloud Services</h2>
                        <section className="container-price">
                            <h3 className="aditional-info">Desde</h3>
                            <h1 className="price-product">10 €</h1>
                        </section>
                        <div className="container-info-product">
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Soporte 24/7</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Dashboard</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Buen rendimiento</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">RAM DDR4</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">1vCore (minimo)</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Buenos precios</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Instalación Gratuita</h2>
                            </div>
                        </div>
                        <div className="container-pedir">
                            <a className="btn-pedir" href="#">Mirar Precios</a>
                        </div>
                    </div>

                    <div className="producto">
                        <h2 className="name-product">Discord Bot</h2>
                        <section className="container-price">
                            <h3 className="aditional-info">Desde / Mensual</h3>
                            <h1 className="price-product">5 €</h1>
                        </section>
                        <div className="container-info-product">
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Mantenimiento del bot</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Actualizaciones constantes</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Acceso a su codigo</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Hosting incluido 24/7</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Sin marca de agua</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">100% propiedad comprador</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Funciones basicas</h2>
                            </div>
                        </div>
                        <div className="container-pedir">
                            <a className="btn-pedir" href="#">Mirar Precios</a>
                        </div>
                    </div>

                    <div className="producto">
                        <h2 className="name-product">Ecommerce</h2>
                        <section className="container-price">
                            <h3 className="aditional-info">Desde</h3>
                            <h1 className="price-product">250 €</h1>
                        </section>
                        <div className="container-info-product">
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Basic SSL incluido</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Newsletter con Cleverreach</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Venta cruzada manual</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Cupones de descuento</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information"> Configuración Metodos de transporte</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information"> Cumplimiento RGPD / LOPD</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">1.000 productos</h2>
                            </div>
                        </div>
                        <div className="container-pedir">
                            <a className="btn-pedir" href="#">Encargar</a>
                        </div>
                    </div>

                    <div className="producto">
                        <h2 className="name-product">Desarrollo Web</h2>
                        <section className="container-price">
                            <h3 className="aditional-info">Desde</h3>
                            <h1 className="price-product">50 €</h1>
                        </section>
                        <div className="container-info-product">
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Web móvil (responsive)</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Home + 3 secciones</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Formulario de contacto</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">RGPD / LOPD</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Integración Redes Sociales</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Google Analytics</h2>
                            </div>
                            <div className="container-information">
                                <Image className="image-check" src={check}></Image>
                                <h2 className="texto-information">Diseño moderno y actual</h2>
                            </div>
                        </div>
                        <div className="container-pedir">
                            <a className="btn-pedir" href="#">Encargar</a>
                        </div>
                    </div>
                </div>

                
            </div>
        </main>
    
  );
};

export default Inicio;
