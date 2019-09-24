
import React from 'react';
import { Row,Col,Card,Media } from 'reactstrap';
import Page from '../components/Page';
import {Link} from 'react-router-dom';

import {  MdKeyboardArrowRight } from 'react-icons/md';
import Image1 from '../components/assets/img/icons/category/Image1.png';
import Image2 from '../components/assets/img/icons/category/Image2.png';
import Image3 from '../components/assets/img/icons/category/Image3.png';
import Image4 from '../components/assets/img/icons/category/Image4.png';
import Image5 from '../components/assets/img/icons/category/Image5.png';


class ServicesPage extends React.Component {
  render(){
      return(
      <div>
         <Page
            // className="ServicePage"
            // title="Services"
            // breadcrumbs={[{ name: 'Services', active: true }]}
          >
  
        <Row className="ServicePageMain">
        <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
          <Link to="/subcategorypages/mainsubcategorypage">
          <Card className="flex-row card-serv-main">
           <Media className="mediaMain">
              <Media left>
                <Media object src={Image1} alt="image"/>
              </Media>
                <Media body>
                  <Media heading>
                    Breakfast
                  </Media>
                   <span className="sub-title"> First meal of the day </span>
                </Media>
              <Media right>
                <Link to="/subcategorypages/mainsubcategorypage">
                  <MdKeyboardArrowRight/>
                </Link>
              </Media>
           </Media>
          </Card> 
          </Link>
        </Col>

        <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row card-serv-main">
           <Media className="mediaMain">
              <Media left>
                <Media object src={Image2} alt="image"/>
              </Media>
                <Media body>
                  <Media heading>
                     Brunch 
                  </Media>
                  <span className="sub-title"> For late mornings </span>
                </Media>
              <Media right>
               <MdKeyboardArrowRight/>
              </Media>
           </Media>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row card-serv-main">
           <Media className="mediaMain">
              <Media left>
                <Media object src={Image3} alt="image"/>
              </Media>
                <Media body>
                  <Media heading>
                      Lunch 
                  </Media>
                  <span className="sub-title"> Light midday meals </span>
                </Media>
              <Media right>
               <MdKeyboardArrowRight/>
              </Media>
           </Media>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row card-serv-main">
           <Media className="mediaMain">
              <Media left>
                <Media object src={Image4} alt="image"/>
              </Media>
                <Media body>
                  <Media heading>
                    Dinner
                  </Media>
                  <span className="sub-title"> Delicious evening meals </span>
                </Media>
              <Media right>
               <MdKeyboardArrowRight/>
              </Media>
           </Media>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row card-serv-main">
          <Media className="mediaMain">
              <Media left>
                <Media object src={Image5} alt="image"/>
              </Media>
                <Media body>
                  <Media heading>
                    Drinks
                  </Media>
                  <span className="sub-title"> Party starts from here </span>
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

export default ServicesPage;