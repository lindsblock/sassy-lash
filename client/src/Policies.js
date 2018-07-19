import React from 'react';
import { Header, Button, Segment, Form, Divider, List } from 'semantic-ui-react';
import axios from 'axios'

class Policies extends React.Component {
  state = { name: '', phone: '', conditions: '', agree: false }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/mails/consent', { ...this.state })
      .then( () => {
        //TODO flash message
        this.setState({ name: '', phone: '', conditions: '' })
      })
  }

  render() {
    const { name, phone, conditions, agree } = this.state
    return (
      <div className="background">
        <Header as="h1" style={styles.pageHeaders}> Policies and Consent Form</Header>
        <Segment style={{ fontFamily: 'Arsenal', fontSize: '18px', margin: '50px'}}>
          <Header as="h1" style={styles.secondaryHeaders}>Sassy Lash & Esthetics Consent Form</Header> <Header as="h1" style={styles.secondaryHeaders}>Cancellation Policy</Header>
          <List bulleted style={{ fontSize: '19px' }}>
            <List.Item>24 hrs notice is required for all cancellations. Same day cancellations or no shows are subject to a $25 fee due prior to rescheduling another appointment.
              Two or more violations will require pre-payment for future services and require a credit card on file. </List.Item>
          </List>
          <Header as="h1" style={styles.secondaryHeaders}>Late Policy</Header>
          <List bulleted style={{ fontSize: '19px'}}>
            <List.Item>If you are under 30 min late we can still complete the appt with the remaining time but will still be the full price of the service and your lashes may not be as full.
              30 mins late or more will result in a same day cancellation fee  of $25 and you will have to reschedule.</List.Item>
          </List>
          <Header as="h1" style={styles.secondaryHeaders}>New Client Policy</Header>
          <List bulleted style={{ fontSize: '19px'}}>
            <List.Item>If you are a new client that is getting a fill an extra $10 is required for your first appointment due to the extra work required.</List.Item>
          </List>
          <Header as="h1" style={styles.secondaryHeaders}>Know Before Your Appointment</Header>
          <p>Please be aware of the following information and fill out the bottom section of this form after reading.</p>
          <List bulleted style={{ fontSize: '19px'}}>
            <List.Item> I understand that because of my natural lash cycle I will need to maintain my extension every 2-4 weeks to keep them full.</List.Item>
            <List.Item> I understand that while every attempt will be made to provide me with the length and fullness I have
              chosen, my final result may not be what I initially envisioned due to amount of natural lashes and shedding cycles.</List.Item>
            <List.Item>I have reviewed and understand the eyelash extension after care instructions.</List.Item>
            <List.Item>I have notified my lash artist of any conditions or allergies I may have that may result in adverse affects to eyelash extensions.</List.Item>
            <List.Item> I understand that if I have any concerns, I will address these with my lash extension specialist. </List.Item>
            <List.Item> I give permission to my lash extension specialist to perform the lash extension procedure we have discussed,
              and will hold her harmless and nameless from any liability that may result from this treatment.</List.Item>
          </List>
          <p style={{fontSize:'19px'}}>Please fill out the following information.</p>
          <Form onSubmit={this.handleSubmit} style={{fontFamily:'Arsenal', fontSize: '19px'}}>
            <Form.Input
               name="name"
               required
               value={name}
               onChange={this.handleChange}
               label="Full Name"
             />
            <Form.Input
               name="phone"
               required
               value={phone}
               onChange={this.handleChange}
               label="Phone Number"
             />
            <Form.TextArea
               name="conditions"
               required
               value={conditions}
               onChange={this.handleChange}
               label="Conditions or Allergies"
             />
             <p>BY CHECKING THE BOX BELOW YOU AGREE TO THE ABOVE TERMS AND POLICIES. </p>
             <input
               style={{ height:'20px', width: '20px'}}
               type="checkbox"
               id="agree"
               name="agree"
               value={agree}
               required >

              </input>
               I Agree
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
