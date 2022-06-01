import React, {useState} from 'react';
import school from "./../../../images/school.png"
import child from "./../../../images/students.png"
import book from "./../../../images/book.png"
import teach from "./../../../images/teach.png"
import {media} from "../../media";

const Info = () => {

    const [modal, setModal] = useState(false)

    return (
        <section id="info">
            <div className="container">
                <div className="info-general__width"/>
                <div className="info-general">
                    <div className="info-general__block">
                        <div style={{width: media(250, 625), height: media(190, 438), margin: media(10, 25)}}/>
                        <img src={school} alt="img" style={{width: media(250, 625), height: media(190, 438)}}/>
                    </div>
                    <div className="info-general__block2">
                        <h1>Мектеп тууралуу маалымат</h1>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={child} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы окуучулар</h2>
                                <h3>254</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={book} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Жалпы китептердин саны</h2>
                                <h3>3481</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={teach} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы мугалимдер</h2>
                                <h3>29</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-general2">
                    <p style={{fontSize: media(16, 18)}}>Биздин мектеп 1971-жылы Кувасай шаарына караштуу Акалтын
                        колхозунда уюштурулуп ачылган. Ал мезгилде мектептин директору Каримов Аким болгон. Андан кийин
                        Жайылма айылына №23 мектеп интернат болуп көчүрүлгөн. 1975-1979-жылы мектепте Таштемир Кулдашев,
                        1979-1984-жылдары Муса Каримов, </p>
                    <button
                        onClick={() => setModal(true)}
                    >Толук маалымат
                    </button>
                    {modal && (
                        <div className="info-general2__modal">
                            <div className="info-general2__modal__block">
                                <h1 onClick={() => setModal(false)}>Жабуу</h1>
                                <p>Мектеп таржымалы.
                                    Биздин мектеп 1971-жылы Кувасай шаарына караштуу Акалтын колхозунда уюштурулуп
                                    ачылган. Ал мезгилде мектептин директору Каримов Аким болгон. Андан кийин Жайылма
                                    айылына №23 мектеп интернат болуп көчүрүлгөн. 1975-1979-жылы мектепте Таштемир
                                    Кулдашев, 1979-1984-жылдары Муса Каримов, 1984-1988-жылдары Кыпчакова Майрамкан,
                                    1989-1999-жылдары Кыпчакбаев Зиябидин директор болуп иштеген. 1999-жылдын 1-мартынан
                                    баштап мектеп Чоң-Алай районунун карамагына өтүп «Жайылма» орто мектеби деп аталды.
                                    1999-2001-жылдары Азимов Изатилла 2002-2004-окуу жылдары Тагайкулов Мукаш мектептин
                                    директору болуп иштеген. 2004-2007-жылдары Азимов Изатилла директор болуп иштеген.
                                    2008-жылдын 1-сентябрынан 2017-жылдын 7-июнь айына чейин Кыпчакбаев Шамшидин
                                    директор болуп иштеген. 2017-жылдын 8-июнунан 2021-жылдын 30-сентябрына чейин
                                    Насиров Дүйшөбай директор болуп иштеген. 2018-жылдын 1-сентябрь айынан баштап
                                    Кашка-Суу айылдык кеңешинин токтомунун негизинде, жергиликтүү жашоочулардын сунушу
                                    менен “Жайылма” орто мектеби Х.Базаров атындагы орто мектеп болуп өзгөрүлдү.
                                    2021-жылдын 1-октябрь айынан баштап азыркы күнгө чейин Жалилов Нурбек директор болуп
                                    иштөөдө. Мектепте 145 окуучу окуйт аларга 24 мугалим таалим-тарбия берүүдө.

                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Info;