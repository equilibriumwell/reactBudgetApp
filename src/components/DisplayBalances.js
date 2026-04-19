import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = () => {
    return (
        <Segment textAlign='center'     >
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title='Income' value='$0.00' size='tiny' color='green'/>
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title='Expenses' value='$0.00' size='tiny' color='red'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Segment>

    );
}   

export default DisplayBalances;