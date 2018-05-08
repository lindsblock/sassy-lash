import React from 'react';
import { Header, Table, Container, Segment, Divider } from 'semantic-ui-react';


class Services extends React.Component {
  render() {
    return (
      <div className="background">
        <Header as="h1" style={styles.pageHeaders}> Services</Header>
        <Container style={{paddingRight:'200px', paddingLeft: '200px', paddingBottom:'100px'}}>
          <Segment>
          <Table basic='very'padded>
            <Table.Header>
              <Table.Row style={{ fontFamily: 'Arima Madurai', fontSize: '20px'}}>
                <Table.HeaderCell>Eyelash Extensions</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Classic Full Set</Table.Cell>
                <Table.Cell>$125</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Classic Fill</Table.Cell>
                <Table.Cell>$55</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Classic Super Fill</Table.Cell>
                <Table.Cell>$75</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Volume Full Set</Table.Cell>
                <Table.Cell>$150</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Volume Fill</Table.Cell>
                <Table.Cell>$65</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Volume Super Fill</Table.Cell>
                <Table.Cell>$85</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>First Time Client Fill</Table.Cell>
                <Table.Cell>+ $10</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
        <Divider hidden />
        <Segment>
          <Table basic='very'padded>
            <Table.Header>
              <Table.Row style={{ fontFamily: 'Arima Madurai', fontSize: '20px'}}>
                <Table.HeaderCell>Other Services</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Lash Lift</Table.Cell>
                <Table.Cell>$60</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Lash Lift + Tint</Table.Cell>
                <Table.Cell>$75</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Lash Tint</Table.Cell>
                <Table.Cell>$20</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Brow Wax</Table.Cell>
                <Table.Cell>$12</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Brow Tint</Table.Cell>
                <Table.Cell>$10</Table.Cell>
              </Table.Row>
              <Table.Row style={{ fontFamily: 'Arsenal', fontSize: '1.33em' }}>
                <Table.Cell>Customized Spray Tan</Table.Cell>
                <Table.Cell>$30</Table.Cell>
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
