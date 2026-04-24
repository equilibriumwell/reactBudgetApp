import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

const NewEntryForm = ({ addEntry, setDescription, setValue, setIsExpense, value, description, isExpense, }) => {

    // console.log("typeof setDescription:", typeof setDescription);
    return (
        <div>
            <Form unstackable>
                <EntryForm description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense} />
                <ButtonSaveOrCancel addEntry={addEntry} />
            </Form>
        </div>
    );
}

export default NewEntryForm;