import React, { useState } from 'react';
import {connect} from 'react-redux';
import Login from '../../login/Login';
import {hideModal, showModal} from '../../../actions/modal';
import './Modal.scss';


const Modal = ({modal, hideModal}) => {

  // const [visible, setVisible]= useState(modal);
  // console.log(visible)
  const modalStatus = (e) => {
    if(e.target.className ==="Modal") {
      hideModal();
    }
    console.log('Modal',modal )
  }

  return (
    <div className="Modal"
      onClick={(e) => modalStatus(e)}
      onKeyPress={(e) => e.key ==='Escape' ? modalStatus() : null}
      style={{display: modal ? 'flex' : 'none'}}
    >
      <div className="Modal-Centered">
        <Login />
      </div>
    </div>
  )
}

export default connect(({modal}) => ({modal}), {hideModal})(Modal);