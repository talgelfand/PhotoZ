import React, {Component} from 'react';
import { Button, Form, Input, InputGroup, Label} from 'reactstrap';
import Modal from 'react-modal';

import './modal.scss';

class ModalWindow extends Component {

    state = {
        modalIsOpened: true
    }

    toggleModal = () => {
        this.setState(prevState => ({
            modalIsOpened: !prevState.modalIsOpened
        }));
    }

    render() {
        return (
            <Modal 
                isOpen={this.state.modalIsOpened} 
                onRequestClose={this.toggleModal}
                style={
                    {
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',

                        }
                    }
                }
                className="modal">
                <div className="modal__wrapper">
                    <div className="modal__title">New post</div>
                    <img className="modal__close" src="img/close.svg" alt="close" onClick={this.toggleModal}/>
                </div>
                <Form className="modal__form">
                    <InputGroup className="modal__input_wrapper">
                        <Label>Choose file</Label>
                        <div className="modal__wrapper">
                            <Input placeholder="File is not selected"/>
                            <Button color="primary">Browse</Button>
                        </div>
                    </InputGroup>
                    <InputGroup className="modal__input_wrapper">
                        <Label>Post title</Label>
                        <div className="modal__wrapper">
                            <Input placeholder="Some title here"/>
                        </div>
                    </InputGroup>
                    <Button className="modal__button" color="primary">Create</Button>
                </Form>
            </Modal>
        )
    }

}

export default ModalWindow;