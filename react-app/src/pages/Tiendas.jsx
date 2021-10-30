import React from 'react'
import waImg from '../img/whatsapp.png'
import insImg from '../img/instagram.png'
import fbImg from '../img/facebook.png'
import gmImg from '../img/gmail.png'

export default function Tiendas() {
    return (
        <div>
            <div class="bg">
                <p style={{ textAlign: 'center', margin: '1%' }}> Tienda el messi es un tienda virtual y presencial ubicada en la
                    ciudad de
                    Cali, <br />
                    realizamos todo tipo de envios nacionales, en la ciudad de Cali
                    se realiza <br />contraentrega para mayor seguridad y confianza de nuestros clientes.
                    <br />
                    <br />
                    Puedes comunicarte con nosotros por medio de nuestras redes sociales,
                    <br /> da click en el enlace que más te sea cómodo.
                </p>
                <br />
                <div class="box-redes">
                    <div class="boxgrande">
                        <img class="whatsapp" src={waImg} alt="whatsapp" style={{ height: '4%' }} />
                        <a href="https://api.whatsapp.com/send?phone=573137515912&text=Hola!!%20%0Aestoy%20interesado%20en%
                20adquirir%20mayor%20informaci%C3%B3n%20de%20sus%20productos.%20%0Amuchas%20gracias!!"> +57 313 751
                            5912</a>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div class="boxgrande">
                        <img class="instagram" src={insImg} alt="instagram" style={{ height: '4%' }} /> tiendaelmessi
                    </div>
                    <br />
                    <br />
                    <br />
                    <div class="boxgrande">
                        <img class="facebook" src={fbImg} alt="facebook" style={{ height: '4%' }} /> Tienda el messi
                    </div>
                    <br />
                    <br />
                    <br />
                    <div class="boxgrande">
                        <img class="gmail" src={gmImg} alt="gmail" style={{ height: '4%' }} />tiendaelmessi@gmail.com
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <p style={{ textAlign: 'center', margin: '1%' }}> Puedes visitar nuestro local ubicado en la siguiente dirección <br />
                    LOCAL 165-B San andresito centro</p>

                <div class="mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15930.630420592148!2d-76.49099805!3d3.4332406499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1629247671985!5m2!1ses!2sco"
                        width="400" height="300" style={{ border: '1%', margin: '1%', textAlign: 'center' }} allowfullscreen=""
                        loading="lazy"
                        title="a"></iframe>
                </div>
            </div>
        </div >
    )
}
