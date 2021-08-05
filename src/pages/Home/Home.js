import "./Home.css"
import React, { useContext } from 'react'
import Container from "../../containers/Container";
import { Link } from "react-router-dom";
import data from "../../data/transport";
import premium from "../../data/premium"
import HomeTheme from "./HomeTheme";
import ThemeContext from "../../theme-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

const categories = [
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
        backColor: "rgb(255, 206, 50)",
        title: "Детский мир",
        to: "detskiy-mir"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
        backColor: "rgb(58, 119, 255)",
        title: "Недвижимость",
        to: "nedvijimost"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
        backColor: "rgb(35, 229, 219)",
        title: "Транспорт",
        to: "transport"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
        backColor: "#ff5636",
        title: "Работа",
        to: "rabota"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png",
        backColor: "#fff6d9",
        title: "Животные",
        to: "jivoy"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/dom-i-sad-899-2x.png",
        backColor: "#ceddff",
        title: "Дом и Сад",
        to: "domsad"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png",
        backColor: "#c8f8f6",
        title: "Электроника",
        to: "elektor"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
        backColor: "#ffd6c9",
        title: "Бизнес и Услуги",
        to: "biznes"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png",
        backColor: "#ffce32",
        title: "Мода и стиль",
        to: "moda"
    }
]


const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme, toggleTheme);

    return (
        <Container>
            <HomeTheme className={`shadow ${theme}`}>
                <div className="searchBox">
                    <div className="formCard container">
                        <input type="text" className="form-control mt-2" placeholder="754 714 объявлений рядом" />
                        <input type="text" className="form-control mt-2" placeholder="Весь Узбекистан" />
                        <div className="d-flex align-items-center">
                            <button className="searchButton">Поиск</button>
                        </div>
                    </div>
                </div>
                <div className="container text py-5">


                    <h1 className="text-center">Главные категории</h1>
                    {categories.map(v =>
                        <Link to={v.to} key={v.to} className="category">
                            <div className="icon" style={{ backgroundColor: v.backColor }}>
                                <img src={v.icon} alt="" />
                            </div>
                            <p className="titles text-decoration-none">
                                {v.title}
                            </p>
                        </Link>)
                    }
                </div>
                <div className="row py-5 ">

                    <h1 className="text-center">Премиум объявления</h1>
                    {premium.map(v =>
                        <div className="food col-sm-6 col-md-3">
                            <div className="product shadow rounded  overflow-hidden p-3">
                                <img src={v.img} className="mw-100  mb-4" alt="" />
                                <p>{v.title}</p>
                                <span className="location">{v.location}</span> <br />
                                <span className="price">{v.price}</span>
                            </div>
                        </div>)
                    }


                </div>
                <div>
                    <button className="searchall  d-grid  col-2  mx-auto justify-content-center align-items-center text-center">Посмотреть все</button>

                </div>
            </HomeTheme>


        </Container>


    )
}


export default Home;