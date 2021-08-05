import "./About.css"
import React from 'react'
import Container from "../../containers/Container";

const About = () => {
    return (
        <Container>
            <section id="hero">

                <div className="heroWrapper d-flex">
                    <div className="heroContent">
                        <h1 className="m-3">Возьмите OLX с собой</h1>
                        <ul>
                            <li>Используйте удобное бесплатное приложение для смарфтона</li>
                            <li>Создавайте и публикуйте объявления за минуты</li>
                            <li>Ищите объявления и общайтесь откуда угодно</li>
                        </ul>
                        <div className="icons d-flex m-5">
                            <a className="appIcon" href="https://itunes.apple.com/uz/app/torg.uz/id665094472?mt=8&ign-mpt=uo%3D4"></a>
                            <a className="appIcon play" href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-landing"></a>
                        </div>
                    </div>

                    <div className="imgHero">
                        <img className="imgmobile" />
                    </div>
                </div>



            </section>
        </Container>
    )
}

export default About;