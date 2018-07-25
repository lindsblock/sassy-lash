import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Image, Menu, Dropdown } from 'semantic-ui-react';


class NavBar extends React.Component {

  render() {
    return (
      <div>
        <Segment textAlign="center" style={{
          backgroundImage:`url(https://images.pexels.com/photos/751374/pexels-photo-751374.jpeg?cs=srgb&dl=blur-bokeh-bright-751374.jpg&fm=jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: 150,
          backgroundPosition: 'center'
        }} vertical>
        <Link to="/">
          <Header style={{ padding: '3px', fontFamily:'Great Vibes', fontSize: '70px', marginTop: '23px'}}>Sassy Lash & Esthetics</Header>
        </Link>
          <Image centered src='./images/lashes3.png'/>
        </Segment>
        <div style={styles.navHeaders}>
        <div className="desktopSizeDiv">
          <Menu pointing secondary style={{width: '100%'}}>
            <Link  to='/'>
              <Menu.Item style={styles.navHeaders} name='home' />
            </Link>
            <Link to='/services'>
              <Menu.Item style={styles.navHeaders} name='services'>Services </Menu.Item>
            </Link>
            <Link to='/photos'>
              <Menu.Item style={styles.navHeaders} name='photos'>Photos</Menu.Item>
            </Link>
            <Link to='/faq'>
              <Menu.Item style={styles.navHeaders} name='faq'>FAQ</Menu.Item>
            </Link>
            <Link to='/aftercare'>
              <Menu.Item style={styles.navHeaders} name='aftercare'>After Care</Menu.Item>
            </Link>
            <Link to='/about'>
              <Menu.Item style={styles.navHeaders} name='about'>About</Menu.Item>
            </Link>
            <Link to='/testimonials'>
              <Menu.Item style={styles.navHeaders} name='about'>Testimonials</Menu.Item>
            </Link>
            <Link to='/policies'>
              <Menu.Item style={styles.navHeaders} name='policies'>Policies</Menu.Item>
            </Link>
            <Link to='/contact'>
              <Menu.Item style={styles.navHeaders} name='contact'>Contact</Menu.Item>
            </Link>
          </Menu>
       </div>
       <div className="mobileSizeDiv">
           <Dropdown icon='content' floating className='link item' style={{color: 'blrgb(171, 171, 171)ue', display: 'flex', justifyContent: 'center', fontSize: '24px', margin: '20px'}}>
               <Dropdown.Menu className="menuTop" >
                   <Menu.Item as='a' href="/">Home</Menu.Item>
                   <Menu.Item as='a' href="/services">Services</Menu.Item>
                   <Menu.Item as='a' href="/photos">Photos</Menu.Item>
                   <Menu.Item as='a' href="/faq">FAQ</Menu.Item>
                   <Menu.Item as='a' href="/aftercare">After Care</Menu.Item>
                   <Menu.Item as='a' href="/about">About</Menu.Item>
                   <Menu.Item as='a' href="/testimonials">Testimonials</Menu.Item>
                   <Menu.Item as='a' href="/policies">Policies</Menu.Item>
                   <Menu.Item as='a' href="/contact">Contact</Menu.Item>
               </Dropdown.Menu>
           </Dropdown>
       </div>
     </div>
    </div>
    )
  }
}

const styles = {
  navHeaders:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arima Madurai',
    marginTop:'5px',
    marginBottom: '5px',
    color: 'rgb(99, 99, 99)',
    fontSize: '20px',
    borderRight: '6px, solid, black',
  }
}

export default NavBar;
