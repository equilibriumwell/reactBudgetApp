import React from "react";
import { Form, Segment, } from "semantic-ui-react";


const EntryForm = ({ description, setDescription, value, setValue, isExpense, setIsExpense }) => {
    return (
        <div>
            <Form.Group>
                <Form.Input icon='tags' label='Description' placeholder='Shiny things' width={12} value={description} onChange={(e) => setDescription(e.target.value)} />
                <Form.Input icon='dollar' label='Value' placeholder='100.00' width={4} iconPosition='left' value={value} onChange={(e) => setValue(Number(e.target.value))} />
            </Form.Group>
            <Segment compact>
                <Form.Checkbox
                    label={isExpense ? "Expense" : "Income"}
                    toggle
                    checked={isExpense}
                    onChange={(e, data) => setIsExpense(data.checked)}
                />
            </Segment>
        </div>
    );
}

export default EntryForm;