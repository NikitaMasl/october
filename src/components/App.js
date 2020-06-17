import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addData } from '../store/actions';

import { Base_Path } from '../constants';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }
  componentDidMount(){
    fetch(`${Base_Path}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        data:data
      })
      data.static_blocks.map(el => {
        this.props.addData(el.id, el.order, el.title, el.description, el.content, el.is_published, el.image1, el.image2, el.image3, el.image4)
        return null
      })
    })
    .catch(error => console.log(error))
  }
  render() {
    const { name, title, content, description, gallery } = this.state.data;
    return (
      <>
        <Header />
        <Main name={name} title={title} content={content} description={description} gallery={gallery}/>
        <Footer />
      </>
    )
  }
}

const mapStateProps = (state) => {
  return {
      data: state.data
  };
};

const mapActionToProps = (dispatch) => {
  return {
      addData: bindActionCreators(addData, dispatch)
  }
};

export default connect( mapStateProps, mapActionToProps )( App )



