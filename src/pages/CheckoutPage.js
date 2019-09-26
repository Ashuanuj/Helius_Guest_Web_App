import React from 'react';
import {Row,Media,Table,FormGroup,Label,CustomInput,Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Page from '../components/Page'

import vegImg from '../components/assets/img/icons/veg.png';
import NonvegImg from '../components/assets/img/icons/non-veg.png'

export default class CheckoutPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    render(){
        return(
            <div>
                 <Page
                // className="ServicePage"
                // title="Services"
                // breadcrumbs={[{ name: 'Services', active: true }]}
                >
                <Row className=""> 
           
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
                    <Table  responsive  className="tableRadio">
                        <tbody className="radio-div">
                            <tr>
                            <FormGroup row className="table-div">
                             <Label className="label" for="exampleCheckbox">Select a Slot : </Label>
                                <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Now" inline checked/>
                                <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Later" inline/>
                            </FormGroup>
                            </tr>
                            <tr className="note-text"> <td>Instructions? E.g. Don’t ring the doorbell </td></tr>
                            <tr className="bill-amt">
                                <td className="totaltext">Total Bill</td>
                                <td className="totalamt"> $11.00 </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="confirmBtn-div">
                        <Button
                            size="lg"
                            className="confirmBtn bg-gradient-Requestbtn btn-outline-info border-0"
                            block
                            onClick={this.toggle}
                            >
                                Confirm Order
                        </Button>
                    </div>
                
                 </Row> 
                </Page>

{/* confirmation modal */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-div">
                <ModalHeader toggle={this.toggle}>Confirmation Message</ModalHeader>
                <ModalBody>
                     Body Copy Message
                </ModalBody>
                <ModalFooter>
                    <Button className="okBtn bg-gradient-Requestbtn border-0" onClick={this.toggle}>OK</Button>{' '}
                </ModalFooter>
                </Modal>
            </div>
        );
    }
}