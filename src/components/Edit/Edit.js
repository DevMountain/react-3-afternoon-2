import React, {Component} from 'react';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

import './Edit.css';

// import axios

class Edit extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      subTitle:'',
      image:'',
      text:'',
      confirm: ''
    }

    this.yes = this.yes.bind(this);
    this.no = this.no.bind(this);
  }

  // insert componentDidMount

  yes() {
    const { confirm, original } = this.state;

    if ( confirm === 'discard' ) {
      this.setState({
        title: original.title,
        subTitle: original.subTitle,
        image: original.image,
        text: original.text,
        confirm: ''
      })
    } else {
      this.deletePost()
    }
  }

  no() {
    this.setState({ confirm: '' });
  }
  
  delete() {
    this.setState({ confirm: 'delete' });
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

  imageChange(val){
    this.setState({ image: val });
  }

  textChange( val ) {
    this.setState({ text: val });
  }

  // insert updatePost

  // Insert into the deletePost

  render() {
    const { title, subTitle, image, text } = this.state;
  
    return (
      <div className='parent'>
        <div className="Edit__container">
          <div className="input-group">
            <label htmlFor="">Title</label>
            <input value={ title } onChange={ e => this.titleChange( e.target.value ) } type="text" />
          </div>

          <div className="input-group">
            <label htmlFor="">Sub-Title</label>
            <input value={ subTitle } onChange={ e => this.subTitleChange( e.target.value ) } type="text" />
          </div>

          <div className="input-group">
            <label htmlFor="">Photo Url</label>
            <input value={ image } onChange={ e => this.imageChange( e.target.value ) } type="text" />
          </div>

          <div className="input-group text-input">
            <label htmlFor="">Content</label>
            <textarea value={ text } onChange={ e=>this.textChange( e.target.value ) } placeholder="Blog here!" />
          </div>

          <div className="buttons">
            <button onClick={ this.delete} className='delete-button'>Delete</button>
            <button onClick={ this.cancel } className='cancel-button'>Cancel</button>
            <button onClick={ this.updatePost } >Update</button>
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

export default Edit;