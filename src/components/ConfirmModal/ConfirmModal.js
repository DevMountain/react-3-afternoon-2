import React, { Component } from 'react';

import './ConfirmModal.css';

class ConfirmModal extends Component{ 
  render() {
    const { no, yes, confirm } = this.props;

    return (
      <div className='ConfirmModal__parent'>
        <div className="ConfirmModal__content">
          {
            confirm === 'discard'
            ?
              <h3>Are you sure you want to discard changes?</h3>
            :
              <h3>Are you sure you want to DELETE this blog post?</h3>
          }

          <button id="ConfirmModal__btn-delete" onClick={ no }>No</button>
          <button onClick={ yes }>Yes, { confirm }</button>
        </div>
      </div>
    )
  }
}

export default ConfirmModal;