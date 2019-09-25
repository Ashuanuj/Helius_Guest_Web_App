import React from 'react';

import {Row, Col, Card, Media} from 'reactstrap';
import { MdKeyboardArrowRight } from 'react-icons/md';

// import {Row, Col, Card, Media,Collapse,Table,NavLink as BSNavLink,} from 'reactstrap';
// import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';

// import vegImg from '../../components/assets/img/icons/veg.png';
// import NonvegImg from '../../components/assets/img/icons/non-veg.png'


// const navComponents = [
//   {  exact: false },
// ];


export default class Active extends React.Component{
    // state = {
    //     isOpenComponents: true,
    //     isOpenContents: true,
    //     isOpenPages: true,
    //   };
    
    //   handleClick = name => () => {
    //     this.setState(prevState => {
    //       const isOpen = prevState[`isOpen${name}`];
    
    //       return {
    //         [`isOpen${name}`]: !isOpen,
    //       };
    //     });
    //   };
      
    render(){
        return(
            <div>
               
               <Row className="ServicePageMain">
                <Col lg={4} md={6} sm={6} xs={12} className="mb-3">

                    <Card className="flex-row requestTab-main">
                    <Media className="mediaMain">
                            <Media body>
                            <Media heading>
                            Order ID: 3457
                            </Media>
                            <span className="sub-title">23 Jun 2019 | 7:30am</span>
                            <span className="sub-title2"> Request Received </span>
                            </Media>
                        <Media right>
                        <MdKeyboardArrowRight/>
                        </Media>
                    </Media>
                    </Card> 
                </Col>
                {/* <Col lg={12} md={12} sm={12} xs={12} className="mb-3">
                    <Card className="flex-row requestTab-main">
                    <Media className="mediaMain">
                            <Media body>
                            <Media heading>
                            Order ID: 3458
                            </Media>
                            <span className="sub-title">23 Jun 2019 | 7:30am</span>
                            <span className="sub-title2"> Request Received </span>
                            </Media>
                        <Media right>
                             </Media>
                    </Media>
            <MdKeyboardArrowDown
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
            />
            <Collapse isOpen={this.state.isOpenPages}>
             {navComponents.map(({ exact }) => (
                
                  <BSNavLink
                    
                    activeClassName="active"
                    exact={exact}
                  >
                                        
                 
            <Table responsive className="TableMain" >
                        <tbody className="t-body">
                        <tr>
                            <td>  
                               <Media object src={vegImg} alt="image"/> Idly Vada
                            </td>
                            <td>  
                                <div className="qtybtn"> 
                                    <span className="minus">-</span>
                                    
                                    <span className="count">2</span>
                                    <span className="plus">+</span>
                                </div>
                            </td>
                            <td> $4.00 </td>
                        </tr>
                        <tr>
                            <td>  
                               <Media object src={vegImg} alt="image"/> Idly Vada
                            </td>
                            <td>Thornton</td>
                            <td> $4.00 </td>
                        </tr>
                        <tr>
                            <td>  
                                 <Media object src={NonvegImg} alt="image"/> Omelette 
                            </td>
                            <td>Omelette</td>
                            <td> $3.00 </td>
                        </tr>
                        </tbody>
                    </Table>
             
                    <Table className="tableRadio">
                        <tbody className="radio-div">
                            <tr className="bill-amt">
                                <td className="totaltext">Total Bill</td>
                                <td> $ 11.00 </td>
                            </tr>
                        </tbody>
                    </Table>
                    
                     </BSNavLink>
               ))}
            </Collapse>
            </Card> 

                </Col> */}

                <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
                    <Card className="flex-row requestTab-main">
                    <Media className="mediaMain">
                            <Media body>
                            <Media heading>
                            Order ID: 3457
                            </Media>
                            <span className="sub-title">23 Jun 2019 | 7:30am</span>
                            <span className="sub-title2"> Request Received </span>
                            </Media>
                        <Media right>
                        <MdKeyboardArrowRight/>
                        </Media>
                    </Media>
                    </Card> 
                </Col>
                <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
                    <Card className="flex-row requestTab-main">
                    <Media className="mediaMain">
                            <Media body>
                            <Media heading>
                            Order ID: 3456
                            </Media>
                            <span className="sub-title">23 Jun 2019 | 7:30am</span>
                            <span className="sub-title2"> Request Received </span>
                            </Media>
                        <Media right>
                        <MdKeyboardArrowRight/>
                        </Media>
                    </Media>
                    </Card> 
                </Col>
                </Row>
             
            </div>
        );
    }
}