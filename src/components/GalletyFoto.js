import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalWindow from './ModalWindow';

export default class GalletyFoto extends Component {
    constructor(props){
        super(props);
        this.state = { 
            images: this.props.images.sort((a, b) => a.id - b.id),
            gallery: document.body.clientWidth*0.9,
            counter: 0,
            isWindowOpen: false,
            imgID: ''
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(prevState !== nextProps){
            return{
                images: nextProps.images.sort((a, b) => a.id - b.id)
            }
        }
        return null
    }
    getImgid = (e) => {
        this.setState({
            isWindowOpen: true,
            imgID: e.target.id
        })
        document.body.style.overflow = 'hidden';
    }
    closeModalWindow = () => {
        this.setState({
            isWindowOpen: false
        })
        document.body.style.overflow = 'visible';
    }
    render() {
        const { images } = this.state;
        window.addEventListener(`resize`, () => {
            this.setState({
                gallery: document.body.clientWidth*0.9,
                counter: images.length - document.getElementsByClassName('gallery')[0].children.length
            })
          }, false);
        return (
            <div className="gallery">
                {
                    images.map((el, index) => {                        
                        return ((184.3+10)*(index+1))<this.state.gallery?
                            <div key={el.id} id={el.id} className="photo-wrapper" onClick={this.getImgid}>
                                <div className={
                                    ((184.3+10)*(index+2))>this.state.gallery ? "overlay" : ""
                                } id={el.id} onClick={this.getImgid}></div>
                                <img src={el.image} id={el.id} alt='gallery' style={{order: `${el.id}`}} onClick={this.getImgid} />
                                {((184.3+10)*(index+2))>this.state.gallery ? <h3 className="hidden-img-counter" id={el.id} onClick={this.getImgid}> Ещё {(images.length+1) - document.getElementsByClassName('gallery')[0].children.length} фото</h3> : null}
                            </div>
                        :
                        null
                    })                    
                }
                {
                    this.state.isWindowOpen
                    ?
                    <ModalWindow id={this.state.imgID} closeModalWindow={this.closeModalWindow} />
                    :null
                }
            </div>
        )
    }
}

GalletyFoto.propTypes={
    images: PropTypes.array
}
GalletyFoto.defaultProps={
    images: []
}