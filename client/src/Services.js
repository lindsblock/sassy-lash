import React from 'react';
import { Header, Table, Container, Segment, Divider } from 'semantic-ui-react';


class Services extends React.Component {
  render() {
    return (
      <div className="background">
        <Header as="h1" style={styles.pageHeaders}> Services</Header>
        <Container>
          <Segment style={{margin:'50px'}}>
          <Table unstackable basic='very' padded>
            <Table.Header>
              <Table.Row style={{ fontFamily: 'Arima Madurai', fontSize: '20px'}}>
                <Table.HeaderCell>Eyelash Extensions</Table.HeaderCell>
                <Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Classic Full Set</Table.Cell>
                <Table.Cell textAlign="right">$125</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Classic Fill</Table.Cell>
                <Table.Cell textAlign="right">$55</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Classic Super Fill</Table.Cell>
                <Table.Cell textAlign="right">$75</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Volume Full Set</Table.Cell>
                <Table.Cell textAlign="right">$150</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Volume Fill</Table.Cell>
                <Table.Cell textAlign="right">$65</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Volume Super Fill</Table.Cell>
                <Table.Cell textAlign="right">$85</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>First Time Client Fill</Table.Cell>
                <Table.Cell textAlign="right">+ $10</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
        <Divider hidden />
        <Segment style={{margin:'50px'}}>
          <Table unstackable basic='very' padded>
            <Table.Header>
              <Table.Row style={{ fontFamily: 'Arima Madurai', fontSize: '20px'}}>
                <Table.HeaderCell>Other Services</Table.HeaderCell>
                <Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Lash Lift</Table.Cell>
                <Table.Cell textAlign="right">$60</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Lash Lift + Tint</Table.Cell>
                <Table.Cell textAlign="right">$75</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Lash Tint</Table.Cell>
                <Table.Cell textAlign="right">$20</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Brow Wax</Table.Cell>
                <Table.Cell textAlign="right">$12</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Brow Tint</Table.Cell>
                <Table.Cell textAlign="right">$10</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Customized Spray Tan</Table.Cell>
                <Table.Cell textAlign="right">$30</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
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
