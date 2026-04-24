// import React from "react";
import { Button, Modal } from "semantic-ui-react";
// import NewEntryForm from "./NewEntryForm";
import EntryForm from "./EntryForm";

const ModelEdit = ({ isOpen, setIsOpen, setDescription, setValue, addEntry, setIsExpense, value, description, isExpense }) => {
    return (
        <Modal open={isOpen} size='small'>
            <Modal.Header>
                Edit Entry
            </Modal.Header>
            <Modal.Content>
                <EntryForm addEntry={addEntry}
                    setDescription={setDescription}
                    setValue={setValue}
                    setIsExpense={setIsExpense}
                    value={value}
                    description={description}
                    isExpense={isExpense} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button onClick={() => setIsOpen(false)} positive>OK</Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModelEdit;