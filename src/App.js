
import { Container, Grid, Header, Segment, Statistic,Icon, Form, Button } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1' >
        Budget App
      </Header>
      <Statistic size='small'>
        <Statistic.Label>
          Your Balance: 
        </Statistic.Label>
        <Statistic.Value>
          $0.00
        </Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            
            <Grid.Column>
              <Statistic size='tiny' color='green'>
              <Statistic.Label style={{ textAlign: 'left' }}>
                Income
              </Statistic.Label>
              <Statistic.Value>
                $0.00
              </Statistic.Value>
            </Statistic>
          
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' color='red'>
              <Statistic.Label style={{ textAlign: 'left' }}>
                Expenses
              </Statistic.Label>
              <Statistic.Value>
                $0.00
              </Statistic.Value>
            </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h3' >
        Transaction History
      </Header>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'  >
          <Grid.Row>
            <Grid.Column width={10} textAlign='left' style={{ paddingLeft: 30 }}>
              Something
            </Grid.Column>
            <Grid.Column  width={3} textAlign='right' style={{ paddingRight: 20 }}>
              $0.00
            </Grid.Column>
            <Grid.Column width={3}>
             <Icon name="edit" bordered/>
             <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAlign='right'  >
          <Grid.Row>
            <Grid.Column width={10} textAlign='left' style={{ paddingLeft: 30 }}>
              Somethingelse
            </Grid.Column>
            <Grid.Column  width={3} textAlign='right' style={{ paddingRight: 20 }}>
              $0.00
            </Grid.Column>
            <Grid.Column width={3}>
             <Icon name="edit" bordered/>
             <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Segment>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'  >
          <Grid.Row>
            <Grid.Column width={10} textAlign='left' style={{ paddingLeft: 30 }}>
              Something
            </Grid.Column>
            <Grid.Column  width={3} textAlign='right' style={{ paddingRight: 20 }}>
              $0.00
            </Grid.Column>
            <Grid.Column width={3}>
             <Icon name="edit" bordered/>
             <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Segment>
      <Header as='h3' >
        Add New Transaction
      </Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' label='Description' placeholder='Shiny things' width={12} /> 
          <Form.Input icon='dollar' label='Value' placeholder='100.00' width={4} iconPosition='left' />
        </Form.Group>
        <Button.Group style={{marginTop: 20}}>
          <Button secondary>Cancel</Button>
          <Button.Or />
          <Button primary>OK</Button>
        </Button.Group>
      </Form>

    </Container>
  );
}

export default App;
