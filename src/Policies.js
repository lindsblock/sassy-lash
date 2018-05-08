import React from 'react';
import { Header, Button, Segment, Form, Checkbox, Divider, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Policies extends React.Component {
  render() {
    return (
      <div className="background">
        <Header as="h1" style={styles.pageHeaders}> Policies and Consent Form</Header>
        <Segment style={{ fontFamily: 'Arsenal', fontSize: '18px', margin: '50px'}}>
          <Header as="h1" style={styles.secondaryHeaders}>Sassy Lash & Esthetics Consent Form</Header>
          <Header as="h1" style={styles.secondaryHeaders}>Cancellation Policy</Header>
          <List bulleted style={{ fontSize: '18px' }}>
            <List.Item>24 hrs notice is required for all cancellations. Same day cancellations or no shows are subject to a fee due prior to rescheduling another appointment.
              Two or more violations will require pre-payment for future services and require a credit card on file. </List.Item>
          </List>
          <Header as="h1" style={styles.secondaryHeaders}>Late Policy</Header>
          <List bulleted style={{ fontSize: '18px'}}>
            <List.Item>If you are under 30 min late we can still complete the appt with the remaining time but will still be the full price of the service and your lashes may not be as full.
              30 mins late or more will result in a same day cancellation fee and you will have to reschedule.</List.Item>
          </List>
          <Header as="h1" style={styles.secondaryHeaders}>New Client Policy</Header>
          <List bulleted style={{ fontSize: '18px'}}>
            <List.Item>If you are a new client that is getting a fill an extra $10 is required for your first appointment due to the extra work required.</List.Item>
          </List>
          <Header as="h1" style={styles.secondaryHeaders}>Know Before Your Appointment</Header>
          <p>Although every precaution will be taken to ensure your safety and well being before, during and after your
            eyelash extension application, please be aware of the following information. Please fill out bottom section of this form after reading.</p>
          <List bulleted style={{ fontSize: '18px'}}>
            <List.Item> I understand that because of my natural lash cycle I will need to maintain my extension every 2-4 weeks to keep them full.</List.Item>
            <List.Item> I understand that while every attempt will be made to provide me with the length and fullness I have
              chosen, my final result may not be what I initially envisioned due to amount of natural lashes and shedding cycles.</List.Item>
            <List.Item>I have reviewed and understand the eyelash extension after care instructions.</List.Item>
            <List.Item>I have notified my lash artist of any conditions or allergies I may have that may result in adverse affects to eyelash extensions.</List.Item>
            <List.Item> I understand that if I have any concerns, I will address these with my lash extension specialist. </List.Item>
            <List.Item> I give permission to my lash extension specialist to perform the lash extension procedure we have discussed,
              and will hold her harmless and nameless from any liability that may result from this treatment.</List.Item>
          </List>
          <p>Please fill out the following information.</p>
          <Form style={{fontFamily:'Arsenal', fontSize: '18px'}}>
            <Form.Input
               name="first_name"
               required
               //value={first_name}
               // onChange={this.handleChange}
               label="First Name"
             />
            <Form.Input
               name="last_name"
               required
               //value={last_name}
               // onChange={this.handleChange}
               label="Last Name"
             />
            <Form.TextArea
               name="conditions"
               required
               //value={last_name}
               // onChange={this.handleChange}
               label="Conditions or Allergies"
             />
             <p>BY CHECKING THE BOX BELOW YOU AGREE TO THE ABOVE TERMS AND POLICIES. </p>
             <Checkbox style={{fontFamily:'Arsenal'}} label='I Agree' />
             <Divider hidden/>
             <Button style={{ fontFamily: 'Arsenal'}}>Submit</Button>
          </Form>
        </Segment>
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
  },
  secondaryHeaders: {
    fontFamily: 'Arima Madurai',
    fontSize: '20px'
  }
}


export default Policies;
