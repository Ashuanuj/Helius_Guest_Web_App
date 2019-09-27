import React from 'react';
import {Col, Row, Card, CardImg} from 'reactstrap';
import RequestForm, {STATE_REQUEST_SUCCESS} from '../components/RequestForm'
import componentImg from '../components/assets/img/bg/component.png'
import Footer from '../components/Layout/Footer';


class RequestFormPage extends React.Component {
    handleAuthState = authState => {
        if (authState === STATE_REQUEST_SUCCESS) {
        //  this.props.history.push('/');
        console.log("props->",this.props);
        }
    };
    render() {
        return (
          <div class="main-requestform">
            {/* <Container> */}
            <Row className="HomeMain"> 
        
            <Col className="pz" sm={{ size: 'auto', offset: 0 }} md={{ size: 'auto', offset: 3 }} lg={{ size: 4, offset: 4 }} >
             
              <Card body className="cardbody-main">
                <CardImg 
                  src={componentImg}
                  className="cardImg"
                />
                <div className="cardImgtext">
                <p className="para">Welcome</p>
                <p className="subpara">Are you ready to enjoy a whole new guest experience without limits? Let’s go!</p>
                </div>
                
                <RequestForm
                  authState={this.props.authState}
                  onChangeAuthState={this.handleAuthState}
                />
                  
                </Card>
             
              <Footer/>
             </Col>
           </Row>
             {/* </Container> */}
       
        
          </div>
       
        );
    }
}
export default RequestFormPage;
