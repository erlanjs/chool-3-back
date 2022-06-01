import React from 'react';
import "../../../styles/Services/services.scss"
import {media} from "../../media";


const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <h3>Байланышуу учун</h3>
                <div className="services__general">
                    <div className="services__general--contact">
                        <a href="https://kashkasuu@bk.ru"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-envelope"/>kashkasuu@bk.ru</span></a>
                        <a href="https://t.me/996779105240"><span style={{fontSize: media(15, 20)}}><i className="fa-brands fa-telegram"/>0 777 655 965</span></a>
                        <a href="tel:0777655965"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-phone"/>0 777 655 965</span></a>
                        <a href="#"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-location-dot"/>Чоң-Алай району.
                            <br/>Жайылма айылы ,<br/>А.Базаров көчөсү √20</span></a>
                    </div>
                    <div className="services__general--map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12167.813153532426!2d72.2827596397419!3d40.3211942284608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc6999902d7deb%3A0x8c0de7b208461cad!2z0JbQsNC50YvQu9C80LA!5e0!3m2!1sru!2skg!4v1654067285258!5m2!1sru!2skg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            style={{border: "none", height: media(280, 450), width: media(300, 600)}} allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;