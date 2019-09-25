import React from 'react';
import {Row,Button,Table,FormGroup,Label,CustomInput } from 'reactstrap';
import Page from '../components/Page'

export default class CheckoutPage extends React.Component{
    render(){
        return(
            <div>
                 <Page
                // className="ServicePage"
                // title="Services"
                // breadcrumbs={[{ name: 'Services', active: true }]}
                >
                <Row className=""> 
                <Table className="tableRadio">
                        <tbody className="radio-div">
                            <tr>
                            <FormGroup row className="table-div">
                             <Label className="label" for="exampleCheckbox">Select a Slot : </Label>
                                <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Now" inline />
                                <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Later" inline checked/>
                            </FormGroup>
                            </tr>
                            <tr className="note-text"> <td>E.g. Wake me up at 7am sharp tomorrow</td></tr>
                          
                    </tbody>
                </Table>
                <div className="WakeupRequestBtn-div">
                        <Button
                            size="lg"
                            className="btnCancel btn-outline-info"
                            >
                               Cancel
                        </Button>
                        <Button
                            size="lg"
                            className="btnReqt bg-gradient-Requestbtn btn-outline-info border-0"
                            >
                               Request
                        </Button>
                 </div>
                
                </Row>

                </Page>
            </div>
        );
    }
}