import React, { Component } from 'react';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

import './Add.css';

// import axios

class Add extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subTitle:'',
      image:'',
      text:'',
      confirm: ''
    };

    this.yes = this.yes.bind( this );
    this.no = this.no.bind( this );
    this.cancel = this.cancel.bind( this );
  }

  // insert post function

  yes() {
    this.setState({
      title: '',
      subTitle: '',
      image: '',
      text: '',
      confirm: ''
    });
  }

  no() {
    this.setState({ confirm: '' });
  }

  cancel() {
    this.setState({ confirm: 'discard' });
  }

  titleChange( val ) {
    this.setState({ title: val });
  }

  subTitleChange( val ) {
    this.setState({ subTitle: val });
  }

  imageChange( val ){
    this.setState({ image: val });
  }

  textChange(val){
    this.setState({ text: val });
  }

  render() {
    let { title, subTitle, image, text } = this.state;

    return (
      <div className='parent'>
        <div className="Add__content">
          <div className="input-group">
            <label htmlFor="">Title</label>
            <input value={ title } onChange={ e => this.titleChange( e.target.value ) } type="text"/>
          </div>

          <div className="input-group">
            <label htmlFor="">Sub-Title</label>
            <input value={ subTitle } onChange={ e => this.subTitleChange( e.target.value ) } type="text"/>
          </div>

          <div className="input-group">
            <label htmlFor="">Photo Url</label>
            <input value={ image } onChange={ e => this.imageChange( e.target.value ) } type="text"/>
          </div>

          <div className="input-group text-input">
            <label htmlFor="">Content</label>
            <textarea value={ text } onChange={ e => this.textChange( e.target.value ) } placeholder="Blog here!" />
          </div>

          <div className="buttons">
            <button onClick={ this.post }>Post</button>
            <button onClick={ this.cancel } className='cancel-button'>Cancel</button>
          </div>

          {
            this.state.confirm
            ?
              <ConfirmModal confirm={ this.state.confirm } no={ this.no } yes={ this.yes } />
            :
              null
          }
        </div>
      </div>
    )
  }
}

export default Add;