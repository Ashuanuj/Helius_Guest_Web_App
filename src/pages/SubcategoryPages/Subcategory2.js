import React, { Component } from 'react';
import { Row,Col,Card,Media,Button } from 'reactstrap';


import SubImage1 from '../../components/assets/img/icons/subcategory/SubImage1.png';
import SubImage2 from '../../components/assets/img/icons/subcategory/SubImage2.png';
import SubImage3 from '../../components/assets/img/icons/subcategory/SubImage3.png';

import vegImg from '../../components/assets/img/icons/veg.png'
import NonvegImg from '../../components/assets/img/icons/non-veg.png'

class SubCategory2 extends Component {
  render() {
    return (
     <div className='tabContent'>

     <Row className="ServicePageMain">
        <Col lg={4} md={6} sm={6} xs={12} className="">
          <Card className="flex-row">
          <Media className="SubcategoryMain">
              <Media left>
                <Media object src={SubImage2} alt="image"/>
              </Media>
                <Media body>
                  <Media heading>
                    <Media object src={vegImg} alt="image"/> Idly Vada
                  </Media>
                    <span className="items-list"> 2 Idly + 1 Vada </span>
                    <b> $4.00</b>
                </Media>
                <div className="qtybtn"> 
                 <span className="minus">-</span>
                 <span className="count"><b>2</b></span>
                 <span className="plus">+</span>
                </div>
           </Media>
          </Card> 
        </Col>

        <Col lg={4} md={6} sm={6} xs={12} className="">
          <Card className="flex-row">
           <Media className="SubcategoryMain">
              <Media left>
                <Media object src={SubImage2} alt="image"/>
              </Media>
                <Media body>
                <Media heading>
                    <Media object src={vegImg} alt="image"/> Bread Toast
                  </Media>
                    <span className="items-list"> 2 Bread slices with butter </span>
                    <b> $4.00</b>
                </Media>
             
                  <Button className="addbtn">Add</Button>
              
           </Media>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className="">
          <Card className="flex-row">
           <Media className="SubcategoryMain">
              <Media left>
                <Media object src={SubImage3} alt="image"/>
              </Media>
                <Media body>
                <Media heading>
                    <Media object src={NonvegImg} alt="image"/> Omelette 
                  </Media>
                    <span className="items-list"> Omelette </span>
                    <b> $3.00</b>
                </Media>
                <Button className="addbtn">Add</Button>
           </Media>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className="">
          <Card className="flex-row">
           <Media className="SubcategoryMain">
              <Media left>
                <Media object src={SubImage1} alt="image"/>
              </Media>
                <Media body>
                <Media heading>
                    <Media object src={vegImg} alt="image"/> Idly Vada
                  </Media>
                    <span className="items-list"> 2 Idly + 1 Vada </span>
                    <b> $4.00</b>
                </Media>
                <Button className="addbtn">Add</Button>
           </Media>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className="">
          <Card className="flex-row">
          <Media className="SubcategoryMain">
              <Media left>
                <Media object src={SubImage2} alt="image"/>
              </Media>
                <Media body>
                  <Media heading>
                    <Media object src={NonvegImg} alt="image"/> Omelette 
                  </Media>
                    <span className="items-list"> Omelette </span>
                    <b> $3.00</b>
                </Media>
                <Button className="addbtn">Add</Button>
           </Media>
          </Card>
        </Col>
       </Row>

                <div className="addItem-div">
                 <span>2 Items | $22.00</span>
                        <Button
                            size="lg"
                            className="ContinueBtn"
                            >
                               Continue
                        </Button>
                      
                 </div>
      </div>
    );
  }
}

export default SubCategory2;