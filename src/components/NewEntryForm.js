import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

const NewEntryForm = () => {
    return (
        <div>
            <Form unstackable>
                <Form.Group>
                    <Form.Input icon='tags' label='Description' placeholder='Shiny things' width={12} />
                    <Form.Input icon='dollar' label='Value' placeholder='100.00' width={4} iconPosition='left' />
                </Form.Group>
                <ButtonSaveOrCancel />
            </Form>
        </div>
    );
}

export default NewEntryForm;