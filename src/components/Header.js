import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const AppLink = (props) => ({
    render: () => (
        <Link {...props} onClick={function(e){
            const blockID = e.target.getAttribute('scroll-to');
            document.getElementById(blockID).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
        }} /> 
    )
})

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <h1>OctoberWeb</h1>
                    <Router>
                        <nav id="top">
                            <AppLink to="" scroll-to="static-blocks">Текстовые блоки</AppLink>
                            <AppLink to="" scroll-to="gallery">Галерея</AppLink>
                            <AppLink to="" scroll-to="form"><img src="./img/hello.png" alt='hello'/>Форма с приветами</AppLink>
                        </nav>
                    </Router>
                </div>
            </header>
        )
    }
}
