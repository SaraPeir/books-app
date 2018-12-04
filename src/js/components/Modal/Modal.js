import React, { Component } from 'react';
import './Modal.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalBS extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
      <Button onClick={this.toggle}>Más detalles</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><span className={'special-typo2'}>{this.props.author},</span> <span className={'special-typo'}>{this.props.title}</span></ModalHeader>
          <ModalBody className={'container centering'}>
          <div className={'row'}>
            <div className={'col-12'}>
              <img className="img-style" src={this.props.url} alt={`${this.props.title} image`} />
            </div>
            <div className={'col-12  p-5'}>
              <p className={'special-typo'}>{this.props.introductionText}</p>
              <p>{this.props.content}</p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter toggle={this.toggle}>{this.props.type2} - {this.props.pageNumber} páginas</ModalFooter>
      </Modal>
    </div>  
    );
  }
}

export default ModalBS;



