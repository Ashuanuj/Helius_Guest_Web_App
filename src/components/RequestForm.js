import PropTypes from 'prop-types';
import React from 'react';
import {Col, Button, Form, FormGroup, Input } from 'reactstrap';
import {Link} from 'react-router-dom';

class RequestForm extends React.Component {
      get isRequest() {
        return this.props.authState === STATE_REQUEST_SUCCESS;
      }
      changeAuthState = authState => event => {
        event.preventDefault();
    
        this.props.onChangeAuthState(authState);
      };
    
      handleSubmit = event => {
        event.preventDefault();
      };
 
render(){
    const {      
        // usernameLabel,
        usernameInputProps,
        roomnoInputProps,
        dobInputProps
    } = this.props
    return(
     
              <Col className="form-main">
              <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        {/* <Label for={usernameLabel}>{usernameLabel}</Label> */}
                        <Input {...usernameInputProps} className="input-bgColor"/>
                    </FormGroup>
                    <FormGroup>
                        
                        <Input {...roomnoInputProps} className="input-bgColor" />
                    </FormGroup>
                    <FormGroup>
                      
                        <Input {...dobInputProps} className="input-bgColor"/>
                    </FormGroup>
                    <hr />
                    {/* <Button
                        size="lg"
                        className="Requestbtn bg-gradient-Requestbtn border-0"
                        block
                        onClick={this.handleSubmit}
                        >
                            REQUEST ACCESS
                    </Button> */}
                    <Link to="/dashboard">
                    <Button
                        size="lg"
                        className="Requestbtn bg-gradient-Requestbtn btn-outline-info border-0"
                        block
                        >
                            REQUEST ACCESS
                    </Button>
                    </Link>
              </Form>
              </Col>
      
    );
  }
}

export const STATE_REQUEST_SUCCESS = 'REQUEST_SUCCESS';

RequestForm.propTypes = {
    authState: PropTypes.oneOf([STATE_REQUEST_SUCCESS]).isRequired,
    // usernameLabel: PropTypes.string,
    usernameInputProps: PropTypes.object,
    roomnoInputProps: PropTypes.object,
    dobInputProps: PropTypes.object
}


RequestForm.defaultProps = {
    authState: 'REQUEST_SUCCESS',
    usernameLabel: 'Bansal',
    usernameInputProps: {
      type: 'text',
      placeholder: 'Name',
    },
   roomnoLabel: 'Name',
   roomnoInputProps: {
      type: 'text',
      placeholder: 'Room No',
    },
   dobLabel: 'Date of Birth',
   dobInputProps: {
      type: 'text',
      placeholder: 'Date of Birth',
    },
};

export default RequestForm;