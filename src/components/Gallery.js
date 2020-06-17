import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';

import GalletyFoto from './GalletyFoto';

export default class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center'
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(prevState !== nextProps){
            return{
                gallery: nextProps.gallery
            }
        }
        return null
    }
    render() {
        return (
            <section id='gallery'>
                <div className="section-text">
                    <h1>
                        Галерея с изображениями
                    </h1>
                    <p>Все просто. Выводится столько фотографий сколько влезит на экран. Те что не влезли расчитываются и выводится их количество над последней фотографией. По клику на эту подпись так же открывается увеличенная версия того изображения, над которым выводится подпись.</p>
                    <GalletyFoto images={this.state.gallery}/>
                    <p>Для того, чтобы на странице мы выводили изображения фактического нужного размера, а не просто уменьшали заведомо большее изображения, учть такая возможность: </p>
                    <CopyToClipboard text={this.state.value}>
                        <div className="section-link" onClick={() => {
                            document.getElementsByClassName('tip-banner')[1].classList.add('appearance')
                            setTimeout(() => {
                                document.getElementsByClassName('tip-banner')[1].classList.remove('appearance')
                            }, 3000)
                        }}>
                            <p>
                                https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center 
                            </p>
                            <i className="far fa-copy"></i>
                            <div className="tip-banner">
                                Ссылка скопирвоана в буфер обмена!
                            </div>
                        </div>
                    </CopyToClipboard>
                </div>
            </section>
        )
    }
}

Gallery.propTypes={
    gallery: PropTypes.array
}
Gallery.defaultProps={
    gallery: []
}