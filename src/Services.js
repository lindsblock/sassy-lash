import React from 'react';
import { Header, Table, Container } from 'semantic-ui-react';


class Services extends React.Component {
  render() {
    return (
      <div >
        <Header as="h1" style={styles.pageHeaders}> Services</Header>
        <Container style={{paddingRight:'100px', paddingLeft: '100px', paddingBottom:'100px'}}>
          <Table basic='very'padded>
            <Table.Header>
              <Table.Row style={{ fontFamily: 'Arima Madurai', fontSize: '20px'}}>
                <Table.HeaderCell>Service</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Classic Full Set</Table.Cell>
                <Table.Cell>$120</Table.Cell>
                <Table.Cell>1 hour</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Classic Fill</Table.Cell>
                <Table.Cell>$120</Table.Cell>
                <Table.Cell>1 hour</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Volume Full Set</Table.Cell>
                <Table.Cell>$140</Table.Cell>
                <Table.Cell>1 hour</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Volume Fill</Table.Cell>
                <Table.Cell>$140</Table.Cell>
                <Table.Cell>1 hour</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}
const styles = {
  pageHeaders: {
    fontFamily: 'Great Vibes',
    fontSize: '60px',
    textAlign: 'center',
    paddingTop: '20px'
  }
}
export default Services;
