import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = ({ addEntry }) => {
    return (
        <div>
            <Button.Group style={{ marginTop: 20 }}>
                <Button secondary>Cancel</Button>
                <Button.Or />
                <Button primary onClick={() => addEntry()}>
                    OK
                </Button>
            </Button.Group>
        </div>
    );
}

export default ButtonSaveOrCancel;