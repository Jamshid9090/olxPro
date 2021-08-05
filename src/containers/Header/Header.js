//import './Header.css';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ThemeContext from './../../theme-context';
import { Button } from 'reactstrap';
import HeaderWrapper from './HeaderWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSun, faUser } from '@fortawesome/free-regular-svg-icons';

//let menu = [
//    { to: "/", title: "Home", },
//    { to: "/mobileapps", title: "Мобильные приложения" },

//]

const logoHeader = "https://seeklogo.com/images/O/olx-logo-40484B6775-seeklogo.com.png"
const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme, toggleTheme);
    return (
        <HeaderWrapper className={`shadow  ${theme}`}>
            <div className="container py-4 d-flex justify-content-between align-items-center">
                <div>
                    <div><img className="imgBox" src={logoHeader} alt="" srcset="" /></div>
                </div>
                <div className="iconBox d-flex mx-5">
                    <p className="mx-4 mb-1">O'Z <span className="text-secondary">| РУ</span></p>
                    <FontAwesomeIcon icon={faHeart} />
                </div>

                <a href="#" className="profil"><FontAwesomeIcon icon={faUser} /> Мой профиль</a>
                <Button className="button1 btn btn-light">Подать объявление</Button>
                <Button onClick={toggleTheme} color={theme}>{theme == "dark" ? "Day" : "Night"}</Button>
            </div>
        </HeaderWrapper>

    )
}

export default Header;