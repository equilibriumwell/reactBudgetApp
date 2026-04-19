import {
  Container,
  Grid,
  Header,
  Segment,
  Statistic,
  Icon,
  Form,
  Button,
} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import "./App.css";
import ButtonSaveOrCancel from "./components/ButtonSaveOrCancel";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader />
      <DisplayBalance title="Your Balance" value="$0.00" size="small" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      {/* <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column
              width={10}
              textAlign="left"
              style={{ paddingLeft: 30 }}
            >
              Something
            </Grid.Column>
            <Grid.Column
              width={3}
              textAlign="right"
              style={{ paddingRight: 20 }}
            >
              $0.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column
              width={10}
              textAlign="left"
              style={{ paddingLeft: 30 }}
            >
              Somethingelse
            </Grid.Column>
            <Grid.Column
              width={3}
              textAlign="right"
              style={{ paddingRight: 20 }}
            >
              $0.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column
              width={10}
              textAlign="left"
              style={{ paddingLeft: 30 }}
            >
              Something
            </Grid.Column>
            <Grid.Column
              width={3}
              textAlign="right"
              style={{ paddingRight: 20 }}
            >
              $0.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment> */}

      <EntryLine description="Income: " value="$10.00" isExpense={false} />
      <EntryLine description="Expense: " value="$10.00" isExpense={true} />
      <MainHeader title="Add New Transaction" type="h3" />

      <NewEntryForm />
    </Container>
  );
}

export default App;
