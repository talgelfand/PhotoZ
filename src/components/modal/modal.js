import React from 'react';
import { Button, Form, Input, InputGroup, Label } from 'reactstrap';

import './modal.scss';

function Modal() {

    return (
        <div className="modal">
            <div className="modal__wrapper">
                <div className="modal__title">New post</div>
                <img className="modal__close" src="img/close.svg" alt="close"/>
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
        </div>
    )
}

export default Modal;