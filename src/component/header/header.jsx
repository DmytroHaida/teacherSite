import React from 'react';
import headerImg from "../../assets/img/header/22.png"
import NavigationBar from '../navbar/NavigationBar';
const Header = (props) => {
    return (
        <div className="header">
            <img src={headerImg} alt="img" height="180px" className="headerImage" />
            <div className="headerAuthorName"><h1><p>Дидик-Меуш</p><p> Ганна</p></h1></div>
            <div className="headerContacts">
                <div>
                    <a href="tel:+380673504040">067 350 4040</a>
                    <p>******@gmail.com</p>
                </div>
            </div>
            <NavigationBar />
        </div>
    );
}

export default Header;