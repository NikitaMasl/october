import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StaticBlock from './StaticBlock'

class StaticBlocks extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(prevState !== nextProps){
            return{
                data: nextProps.data
            }
        }
        return null
    }
    render() {
        const { data } = this.state;
        return (
            <div id="static-blocks">
                {
                    data.map( el => {
                        return el.is_published ?
                        <StaticBlock 
                            key = { el.id }
                            content = { el.content }
                            title = { el.title }
                            description = { el.description }
                            image1 = { el.image1 } 
                            image2 = { el.image2 } 
                            image3 = { el.image3 } 
                            image4 = { el.image4 }
                        />
                    :
                    null
                    })
                }
            </div>
        )
    }
}

StaticBlocks.propTypes={
    data: PropTypes.array
}
StaticBlocks.defaultProps={
    data: [],
}


const mapStateProps = (state) => {
    return {
        data: state.data
    };
  };

export default connect( mapStateProps )( StaticBlocks )
