import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component{
  renderError = ({error, touched}) => {
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }
  renderInput = (formProps) =>{
    //formProps is the name of the input, it has vlaues of label, input,
    //and meta. Meta contains the error messages and if it has been visited.
    const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off"/>
        <div>{this.renderError(formProps.meta)}</div>
      </div>
      )
  }
  onSubmit(formValues){
    console.log(formValues);
  }
  render(){
    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error">
        <Field name="title"
          component={this.renderInput}
          label="Enter Title"/>
        <Field name="description"
          component={this.renderInput}
          label="Enter Description"/>
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {};

  if(!formValues.title){
    errors.title = 'You must enter a title.'
  }

  if(!formValues.description){
    errors.description = 'You must enter a description.'
  }
  return errors;
}

export default reduxForm({
  form: 'StreamCreate',
  validate
})(StreamCreate);
