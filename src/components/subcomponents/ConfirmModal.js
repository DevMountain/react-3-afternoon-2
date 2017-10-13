import React, { Component } from 'react';

class ConfirmModal extends Component{
    
    render(){
        return(
            <div className='modal-bg' >
                <div className="box">
                    {
                        this.props.confirm === 'discard'
                        ?
                        <h3>Are you sure you want to discard changes?</h3>
                        :
                        <h3>Are you sure you want to DELETE this blog post?</h3>
                    }
                    <button onClick={this.props.no} className="delete-button">No</button>
                    <button onClick={this.props.yes}>Yes, {this.props.confirm}</button>
                </div>
            </div>
        )
    }
}

export default ConfirmModal;