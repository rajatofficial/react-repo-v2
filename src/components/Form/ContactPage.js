import React from 'react'
import ContactForm from './reduxForm';

class ContactPage extends React.Component {
  submit = values => {
    console.log(values)
  }
  render() {
    return (
      <div>
        <h2>Registration Form:</h2>
        <ContactForm onSubmit={this.submit} />
      </div>)
  }
}

export default ContactPage