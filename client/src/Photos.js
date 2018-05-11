import React from 'react';
import { Header, Card, Divider } from 'semantic-ui-react';
import ImageZoom from 'react-medium-image-zoom';


class Photos extends React.Component {
  render() {
    return (
      <div className="background">
        <Header as="h1" style={styles.pageHeaders}> Photo Gallery</Header>
        <Header as="h1" style={styles.secondaryHeaders}>Classic Lashes</Header>
        <Card.Group centered itemsPerRow={3} style={{ margin: '10px'}}>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/classic1.JPG',
                  alt: 'Classic Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em'}
                }}
                zoomImage={{
                  src: '../images/classic1.JPG',
                  alt: 'Classic lashes'
                }}
              />
              <Divider hidden />
             <Card.Header style={styles.cardHeaders}>
               Classic Lashes
             </Card.Header>
             <Card.Description>
               Full set before and after- Classic
             </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/classic2.JPG',
                  alt: 'Classic Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em'}
                }}
                zoomImage={{
                  src: '../images/classic2.JPG',
                  alt: 'Classic lashes'
                }}
              />
              <Divider hidden />
             <Card.Header style={styles.cardHeaders}>
               Classic Lashes
             </Card.Header>
             <Card.Description>
              Full set before and after- Classic
             </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/classic3.JPG',
                  alt: 'Classic Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em'}
                }}
                zoomImage={{
                  src: '../images/classic3.JPG',
                  alt: 'Classic lashes'
                }}
              />
              <Divider hidden />

              <Card.Header style={styles.cardHeaders}>
                Classic Lashes
              </Card.Header>
              <Card.Description>
              Full set before and after- Classic
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/classic4.jpg',
                  alt: 'Classic Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em'}
                }}
                zoomImage={{
                  src: '../images/classic4.jpg',
                  alt: 'Classic lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Classic Lashes
              </Card.Header>
              <Card.Description>
              Full set before and after- Classic
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/classic5.jpg',
                  alt: 'Classic Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em'}
                }}
                zoomImage={{
                  src: '../images/classic5.jpg',
                  alt: 'Classic lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Classic Lashes
              </Card.Header>
              <Card.Description>
              Full set before and after- Classic
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/classic6.jpg',
                  alt: 'Classic Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em'}
                }}
                zoomImage={{
                  src: '../images/classic6.jpg',
                  alt: 'Classic lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Classic Lashes
              </Card.Header>
              <Card.Description>
              Full set before and after- Classic
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <Divider />
        <Header as="h1" style={styles.secondaryHeaders}>Volume Lashes</Header>
        <Card.Group centered itemsPerRow={3} style={{ margin: '10px'}}>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/volume2.JPG',
                  alt: 'Volume Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Volume2.JPG',
                  alt: 'Volume lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Volume Lashes
              </Card.Header>
              <Card.Description>
                Full set before and after- Volume
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/classicvsvolume.JPG',
                  alt: 'Volume Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/classicvsvolume.JPG',
                  alt: 'Volume lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Classic vs. Volume
              </Card.Header>
              <Card.Description>
                Classic (top), Volume (bottom)
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/volume2halfweeks.JPG',
                  alt: 'Volume Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/volume2halfweeks.JPG',
                  alt: 'Volume lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Volume Lashes
              </Card.Header>
              <Card.Description>
                2.5 weeks after last fill(left) vs. just after fill(right)- Volume
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/volume3.JPG',
                  alt: 'Volume Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Volume3.JPG',
                  alt: 'Volume lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Volume Lashes
              </Card.Header>
              <Card.Description>
                Full set before and after- Volume
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/volume4.JPG',
                  alt: 'Volume Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Volume4.JPG',
                  alt: 'Volume lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Volume Lashes
              </Card.Header>
              <Card.Description>
                Volume Fill
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/volume5.JPG',
                  alt: 'Volume Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Volume5.JPG',
                  alt: 'Volume lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Volume Lashes
              </Card.Header>
              <Card.Description>
                Volume Fill
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/volume6.JPG',
                  alt: 'Volume Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Volume6.JPG',
                  alt: 'Volume lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Volume Lashes
              </Card.Header>
              <Card.Description>
                Volume Fill
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/volume7.JPG',
                  alt: 'Volume Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Volume7.JPG',
                  alt: 'Volume lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Volume Lashes
              </Card.Header>
              <Card.Description>
                Volume Fill
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/volume8.JPG',
                  alt: 'Volume Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Volume8.JPG',
                  alt: 'Volume lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Volume Lashes
              </Card.Header>
              <Card.Description>
                Volume Fill
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/volume9.JPG',
                  alt: 'Volume Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Volume9.JPG',
                  alt: 'Volume lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Volume Lashes
              </Card.Header>
              <Card.Description>
                4 weeks after last fill(left) vs. just after fill(right)- Volume
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/volume10.JPG',
                  alt: 'Volume Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Volume10.JPG',
                  alt: 'Volume lashes'
                }}
              />
              <Divider hidden />
              <Card.Header style={styles.cardHeaders}>
                Volume Lashes
              </Card.Header>
              <Card.Description>
                Volume Fill
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <Divider />
        <Header as="h1" style={styles.secondaryHeaders} >Hybrid Lashes</Header>
        <Card.Group centered itemsPerRow={3} style={{ margin: '10px'}}>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/hybrid1.JPG',
                  alt: 'Hybrid Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Hybrid1.JPG',
                  alt: 'Hybrid Lashes'
                }}
              />
              <Divider hidden />
             <Card.Header style={styles.cardHeaders}>
               Hybrid Lashes
             </Card.Header>
             <Card.Description>
               Full set before and after- Hybrid
             </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/hybrid2.JPG',
                  alt: 'Hybrid Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Hybrid2.JPG',
                  alt: 'Hybrid Lashes'
                }}
              />
              <Divider hidden />
             <Card.Header style={styles.cardHeaders}>
               Hybrid Lashes
             </Card.Header>
             <Card.Description>
              Combination of Classic and Volume Lashes
             </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <Divider />
        <Header as="h1" style={styles.secondaryHeaders} >Repairs</Header>
        <Card.Group centered itemsPerRow={3} style={{ margin: '10px'}}>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/repair1.jpg',
                  alt: 'Hybrid Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Repair1.jpg',
                  alt: 'Hybrid Lashes'
                }}
              />
              <Divider hidden />
             <Card.Header style={styles.cardHeaders}>
               Repair
             </Card.Header>
             <Card.Description>
               Before and during removal of horrible clumped lashes from sombeody else(top) vs. After a brand new set of Classic lashes (bottom)
             </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/repair2.jpg',
                  alt: 'Hybrid Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Repair2.jpg',
                  alt: 'Hybrid Lashes'
                }}
              />
              <Divider hidden />
             <Card.Header style={styles.cardHeaders}>
               Repair
             </Card.Header>
             <Card.Description>
              Same client as previous pic. After removal of bad lashes from first appointment(top) vs. Two weeks after my fill(bottom). Her natural lashes are coming back in.
             </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/repair3.jpg',
                  alt: 'Hybrid Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Repair3.jpg',
                  alt: 'Hybrid Lashes'
                }}
              />
              <Divider hidden />
             <Card.Header style={styles.cardHeaders}>
               Repair
             </Card.Header>
             <Card.Description>
              After my fill(top) vs. somebody else's work (bottom)
            </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/repair4.jpg',
                  alt: 'Hybrid Lashes',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/Repair4.jpg',
                  alt: 'Hybrid Lashes'
                }}
              />
              <Divider hidden />
             <Card.Header style={styles.cardHeaders}>
               Removal
             </Card.Header>
             <Card.Description>
              After removal of lashes that have been on for years. Her natural lashes are still healthy!
            </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <Divider />
        <Header as="h1" style={styles.secondaryHeaders}>Lash Lifts</Header>
        <Card.Group centered itemsPerRow={3} style={{ margin: '10px'}}>
          <Card>
            <Card.Content textAlign="center">
              <ImageZoom
                image={{
                  src: '../images/lashlift.JPG',
                  alt: 'Lash Lift',
                  className: 'img',
                  style: { width: '18em', height:'18em' }
                }}
                zoomImage={{
                  src: '../images/lashlift.JPG',
                  alt: 'Lash Lift'
                }}
              />
              <Divider hidden />
             <Card.Header style={styles.cardHeaders}>
               Lash Lift
             </Card.Header>
             <Card.Description>
               Lash Lift desciption
             </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
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
    fontSize: '35px',
    textAlign: 'center'
  },
  cardHeaders: {
    fontFamily: 'Arima Madurai',
    fontSize: '30px',
    textAlign: 'center'
  }
}

export default Photos;
