import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StaticBlock extends Component {
    constructor(props){
        super(props);
        this.state = { 
            order: this.props.number,
            title: this.props.string,
            description: this.props.string,
            content: this.props.string,
            image1: this.props.string,
            image2: this.props.string,
            image3: this.props.string,
            image4: this.props.string
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(prevState !== nextProps){
            return{
                order: nextProps.order,
                title: nextProps.title,
                description: nextProps.description,
                content: nextProps.content,
                image1: nextProps.image1,
                image2: nextProps.image2,
                image3: nextProps.image3,
                image4: nextProps.image4
            }
        }
        return null
    }
    render() {
        const { title, description, content, image1, image2, image3, image4 } = this.state;
        return (
            <section>
                <div className="section-text">
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    {   
                    image1
                    ?
                    <div className="gallery-staticblock">
                        {
                            [image1, image2, image3, image4].map((el, index) => (
                                <img key={index} src={el} alt='gallery' />
                            ))
                        }
                    </div>
                    :
                    null
                }
                </div>
                <div className="description-block">{ description }</div>
            </section>
        )
    }
}

StaticBlock.propTypes={
    order: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
    image1: PropTypes.string,
    image2: PropTypes.string,
    image3: PropTypes.string,
    image4: PropTypes.string
}
StaticBlock.defaultProps={
    order: 0,
    title: '',
    description: '',
    content: '',
    image1: null,
    image2: null,
    image3: null,
    image4: null
}
