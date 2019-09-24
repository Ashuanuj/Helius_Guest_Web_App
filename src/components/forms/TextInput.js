import React from 'react';
import cx from 'classnames';
import { FormGroup,Input} from 'reactstrap';

const TextInput = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning },
  inputClassName,
  disabled
}) => (
  <div>
     <FormGroup>
     {/* <Label>{label}</Label> */}
     <Input 
      {...input}
      type={type}
      className={cx(inputClassName, 'form-control', {
        error: !!error
      })}
      // placeholder={`Enter your ${label}`} 
      placeholder={placeholder}
      disabled={disabled} />
     {/* {touched && (( error && <FormFeedback >{error}</FormFeedback>) || (warning && <FormFeedback >{warning}</FormFeedback>))} */}
     {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        {/* 
    { touched && error &&
      <label className="error" htmlFor={input.name}>{error}</label>
    }

    { helpText &&
      <span className="help-block">{helpText}</span>
    } */}
      </FormGroup>
  </div>
);

export default TextInput;