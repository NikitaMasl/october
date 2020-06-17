import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Gallery from './Gallery';
import StaticBlocks from './StaticBlocks'
import Form from './Form';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
                value: 'https://test.octweb.ru/api/pages/index/'
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(prevState !== nextProps){
            return{
                name: nextProps.name,
                title: nextProps.title,
                content: nextProps.content,
                description: nextProps.description,
                gallery: nextProps.gallery
            }
        }
        return null
    }
    render() {
        const { title, content, description, gallery } = this.state;
        return (
            <main>
                <section className="main-section">
                    <div className="section-text">
                        <h1>
                            {title}
                        </h1>
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                        <h2>текстовые блоки и изображения для галереи</h2>
                        <CopyToClipboard text={this.state.value}>
                            <div className="section-link" onClick={() => {
                                document.getElementsByClassName('tip-banner')[0].classList.add('appearance')
                                setTimeout(() => {
                                    document.getElementsByClassName('tip-banner')[0].classList.remove('appearance')
                                }, 3000)
                            }} style={{width: '40vw'}}>
                                <p>
                                    https://test.octweb.ru/api/pages/index/ 
                                </p>
                                <i className="far fa-copy"></i>
                                <div className="tip-banner">
                                    Ссылка скопирвоана в буфер обмена!
                                </div>
                            </div>
                        </CopyToClipboard>
                    </div>
                    <div className="description-block">{ description }Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. </div>
                </section>
                <StaticBlocks />
                <Gallery gallery={gallery} />
                <Form />
            </main>
        )
    }
}

Main.propTypes={
    name: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    description: PropTypes.string,
    gallery: PropTypes.array
}
Main.defaultProps={
    name: '',
    title: '',
    content: '',
    description: '',
    gallery: []
}
