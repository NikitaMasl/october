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

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <div className="contact-info">
                        <div> 
                            <h4>Санкт-Петербург</h4>
                            <p>Большой Проспект П. С., 18, офис 22</p>
                        </div>
                        <div> 
                            <h4>mail@octoberweb.ru</h4>
                            <p>+7 (981) 131-64-98</p>
                        </div>
                        <div>
                            <button className="btn btn-outline-primary" onClick={function(e){
                                document.getElementById('top').scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                                })
                            }}>Написать нам</button>
                        </div>
                    </div>
                    <Router>
                        <nav>
                            <AppLink to="" scroll-to="static-blocks">Текстовые блоки</AppLink>
                            <AppLink to="" scroll-to="gallery">Галерея</AppLink>
                            <AppLink to="" scroll-to="form">Форма</AppLink>
                        </nav>
                    </Router>
                </div>
            </footer>
        )
    }
}
