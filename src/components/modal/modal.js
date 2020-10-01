import React, {Component} from 'react';
import { Button, Form, Input, InputGroup, Label, Modal } from 'reactstrap';

import './modal.scss';

class ModalWindow extends Component {

    state = {
        opened: true
    }

    toggleModal = () => {
        this.setState(prevState => ({
            opened: !prevState.opened
        }));
    }

    render() {
        return (
            <Modal isOpen={this.state.opened} toggle={this.toggleModal} className="modal">
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