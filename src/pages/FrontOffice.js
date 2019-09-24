import React, { Component } from 'react';
import { Row,Col,Card,Media} from 'reactstrap';
import Page from '../components/Page';
import {  MdKeyboardArrowRight } from 'react-icons/md';

class FrontOffice extends Component {
    render() {
      return (
       <div className=''>
        <Page
        // className="ServicePage"
        // title="Services"
        // breadcrumbs={[{ name: 'Services', active: true }]}
        >
         <Row className="ServicePageMain">
            <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <Card className="flex-row front-office-main">
            <Media className="mediaMain">
                <Media left>
                    {/* <Media object src={Image1} alt="image"/> */}
                </Media>
                    <Media body>
                    <Media heading>
                        Wake up Call
                    </Media>
                    <span className="sub-title"> You tell we call</span>
                    </Media>
                <Media right>
                <MdKeyboardArrowRight/>
                </Media>
            </Media>
            </Card> 
            </Col>
            <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <Card className="flex-row front-office-main">
            <Media className="mediaMain">
            
                    <Media body>
                    <Media heading>
                       Room Change
                    </Media>
                    <span className="sub-title"> Request text comes here </span>
                    </Media>
                <Media right>
                <MdKeyboardArrowRight/>
                </Media>
            </Media>
            </Card> 
            </Col>
            <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <Card className="flex-row front-office-main">
            <Media className="mediaMain">
  
                    <Media body>
                    <Media heading>
                    Wifi Password
                    </Media>
                    <span className="sub-title"> Request for password </span>
                    </Media>
                <Media right>
                <MdKeyboardArrowRight/>
                </Media>
            </Media>
            </Card> 
            </Col>
          </Row>
        </Page>
     </div>
    );
  }
}

export default FrontOffice;