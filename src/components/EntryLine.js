import React from "react";
import { Grid, Segment, Icon } from "semantic-ui-react";
// import ModalEdit from "./ModelEdit";
const EntryLine = ({ id, description, value, isExpense = false, deleteEntry, editEntry }) => {
    // const [isOpen, setIsOpen] = React.useState(false);

    return (

        <Segment color={isExpense ? "red" : "green"}>
            <Grid columns={3} textAlign="right">
                <Grid.Row>
                    <Grid.Column
                        width={10}
                        textAlign="left"
                        style={{ paddingLeft: 30 }}
                    >
                        {description}
                    </Grid.Column>
                    <Grid.Column
                        width={3}
                        textAlign="right"
                        style={{ paddingRight: 20 }}
                    >
                        {value}
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name="edit" bordered onClick={() => editEntry(id)} />
                        <Icon name="trash" bordered onClick={() => deleteEntry(id)} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>


    );
}

export default EntryLine;