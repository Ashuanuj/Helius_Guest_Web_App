
import React from 'react';
import {
   Row,Col,Card,CardBody,CardTitle,CardText,CardImg
  } from 'reactstrap';
import SwipeImage from '../components/assets/img/icons/wiping-swipe-for-floors.svg';
import BellImage from '../components/assets/img/icons/bell1.svg';
import ForkImage from '../components/assets/img/icons/plate-fork-and-knife.svg';
import FileImage from '../components/assets/img/icons/file.svg';
import Page from '../components/Page';
import {Link} from 'react-router-dom';


import { Transition } from 'react-transition-group';


const duration = 200;
const dd = 5;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1,
  animation:`fadeDown ${dd}s forwards`,
}
const transitionStyles = {
  entering: { opacity: 1 },
};

const DashboardPage = ({ in: inProp }) => (
     
  <Transition in={inProp} timeout={duration}>

{state => (
<div style={{
  ...defaultStyle,
  ...transitionStyles[state]
}}>

{/* // class DashboardPage extends React.Component {
//   render(){
//      return(
//      <div>  */}
          <Page
            // className="ServicePage"
            // title="Services"
            // breadcrumbs={[{ name: 'Services', active: true }]}
          >
  
        <Row className="ServicePageMain">
        <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row card-serv-main">
            <CardImg
              className="card-img-left"
              src={SwipeImage}
              style={{width:60 , height:60}}
            />
            <CardBody className="pd-10 ">
              <CardTitle>House Keeping</CardTitle>
              <CardText>
                Cleaning, Dusting and More
              </CardText>
            </CardBody>
          </Card>
        </Col>

      
        <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
         <Link to="/frontoffice">
          <Card className="flex-row card-serv-main">
            <CardImg
              className="card-img-left"
              src={BellImage}
              style={{width:60 , height:60}}
            />
            <CardBody className="pd-10">
              <CardTitle>Front Office </CardTitle>
              <CardText>
              Requests, Wifi and More
              </CardText>
            </CardBody>
          </Card>
          </Link>
        </Col>
        

        <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
        <Link to="/services">
          <Card className="flex-row card-serv-main">
            <CardImg
              className="card-img-left"
              src={ForkImage}
              style={{width:60 , height:60}}
            />
            <CardBody className="pd-10">
              <CardTitle>All Day Dining</CardTitle>
              <CardText>
               Breakfast, Brunch, Lunch
              </CardText>
            </CardBody>
          </Card>
          </Link>
        </Col>
        
     
        <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
        <Link to="">
          <Card className="flex-row card-serv-main">
            <CardImg
              className="card-img-left"
              src={FileImage}
              style={{width:60 , height:60}}
            />
            <CardBody className="pd-10">
              <CardTitle>Bed, Bath & More </CardTitle>
              <CardText>
                Towel, Shampoo, Dental Kit..
              </CardText>
            </CardBody>
          </Card>
          </Link>
        </Col>
      

     
        <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
        <Link to="">
          <Card className="flex-row card-serv-main">
            <CardImg
              className="card-img-left"
              src={FileImage}
              style={{width:60 , height:60}}
            />
            <CardBody className="pd-10">
              <CardTitle>  Other Services </CardTitle>
              <CardText>
               Towel, Shampoo, Dental Kit..
              </CardText>
            </CardBody>
          </Card>
          </Link>
        </Col>
       </Row>
       </Page>
       </div>
    )}
  </Transition>
);
//       </div>
//     );
//   }
// } 

export default  DashboardPage ;