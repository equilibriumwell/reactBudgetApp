import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = () => {
    return (
        <div>
            <Button.Group style={{ marginTop: 20 }}>
                <Button secondary>Cancel</Button>
                <Button.Or />
                <Button primary>OK</Button>
            </Button.Group>
        </div>
    );
}

export default ButtonSaveOrCancel;