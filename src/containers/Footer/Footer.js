//import "./Footer.css"
import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import ThemeContext from './../../theme-context'
import FooterWrapper from './FooterWrapper'




let menu = [
    { to: "/mobileapps", title: "Мобильные приложения" },
    { to: "/help", title: "Помощь" },
    { to: "/features", title: "Платные услуги" },
    { to: "/biznes", title: "Бизнес на OLX" },
    { to: "/reklama", title: "Реклама на сайте" },
    { to: "/usluga", title: "Условия использования" },
    { to: "/politika", title: "Политика конфиденциальности" },
]
let menu2 = [
    { to: "/mobileapps", title: "Как продавать и покупать?" },
    { to: "/help", title: "Правила безопасности" },
    { to: "/features", title: "Карта сайта" },
    { to: "/biznes", title: "Карта регионов" },
    { to: "/biznes", title: "Карьера в OLX" },
    { to: "/biznes", title: "Обратная связь" },

]
const Footer = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme, toggleTheme);
    return (
        <FooterWrapper className={`shadow ${theme}`}>
            <footer className="foot text-white  ">
                <div className="container py-5">
                    <div class="row">
                        <div className="col-md-4"><div>
                            {menu.map(value =>
                                <Link to={value.to} key={value.to}>{value.title}</Link>)}
                        </div></div>
                        <div className="col-md-4"><div>
                            {menu2.map(value =>
                                <Link to={value.to} key={value.to}>{value.title}</Link>)}
                        </div></div>
                        <div className="col-md-4"><div>
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
        </FooterWrapper>

    )
}

export default Footer;