import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from '../portal/Portal';

export default class ModalWindow extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(prevState !== nextProps){
            return{
                id: nextProps.id
            }
        }
        return null
    }
    closeModal = () => {
        this.props.closeModalWindow()
    }
    render() {
        return (
            <Portal>
                <div className="overlay-modwin ">
                    <div className="modal-window">
                        <img src={`https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/${this.state.id}.jp${(this.state.id === '5' || this.state.id === '6')?'e':''}g?geometry=630x366&crop=center`} alt="big" />
                        <div className="close-modwin" onClick={this.closeModal}><i className="far fa-times-circle"></i></div>
                    </div>
                </div>
            </Portal>
        )
    }
}

ModalWindow.propTypes={
    id: PropTypes.string,
    closeModalWindow: PropTypes.func
}
ModalWindow.defaultProps={
    id: '',
    closeModalWindow: () => {}
}
