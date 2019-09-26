import React from 'react';

// import {Row, Col, Card, Media} from 'reactstrap';
// import { MdKeyboardArrowRight } from 'react-icons/md';

import {Row, Col, Card, Media,Collapse,Table} from 'reactstrap';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';

import vegImg from '../../components/assets/img/icons/veg.png';
import NonvegImg from '../../components/assets/img/icons/non-veg.png'


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
    state = { collapseID: "", } 
    
    toggleCollapse = collapseID => () => { this.setState(prevState => ({ collapseID: prevState.collapseID !== collapseID ? collapseID : "" })); }
    render(){
        return(
            <div>
               
               <Row className="ServicePageMain">
                {/* <Col lg={4} md={6} sm={6} xs={12} className="mb-3"> */}
                <Col md={6} sm={6} xs={12} className="mb-3">
                    <Card className="requestTab-main">
                    <Media className="mediaMain">
                            <Media body>
                            <Media heading>
                            Order ID: 3457
                            </Media>
                            <span className="sub-title">23 Jun 2019 | 7:30am</span>
                            <span className="sub-title2"> Request Received </span>
                            </Media>
                        <Media right>
                        {/* <MdKeyboardArrowRight/> */}
                        <MdKeyboardArrowDown onClick={this.toggleCollapse("basicCollapse")} 
                        style={{ transform: this.state.collapseID ? 'rotate(0deg)' : 'rotate(-90deg)', 
                        transitionDuration: '0.3s', transitionProperty: 'transform', }} />
                        </Media>
                    </Media>
                    <Collapse id="basicCollapse" isOpen={this.state.collapseID} >
                    <Table responsive className="TableMain" >
                        <tbody className="t-body">
                        <tr>
                            <td>  
                               <Media object src={vegImg} alt="image"/> Idly Vada
                            </td>
                            <td>  
                                <div className="qtybtn"> 
                                    <span className="minus">-</span>
                                    {/* <span className="count"><input value="2"/></span> */}
                                    <span className="count">2</span>
                                    <span className="plus">+</span>
                                </div>
                            </td>
                            <td> $4.00 </td>
                        </tr>
                        <tr>
                            <td>  
                               <Media object src={vegImg} alt="image"/> Bread Toast
                            </td>
                            <td>-</td>
                            <td> $4.00 </td>
                        </tr>
                        <tr>
                            <td>  
                                 <Media object src={NonvegImg} alt="image"/> Omelette 
                            </td>
                            <td>-</td>
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
                    </Collapse>
                    </Card> 
                </Col>

                <Col md={6} sm={6} xs={12} className="mb-3">
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
                <Col md={6} sm={6} xs={12} className="mb-3">
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