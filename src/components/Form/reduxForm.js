import React from 'react'
import { Field, reduxForm } from 'redux-form'
import "./reduxForm.css";

let ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="firstName">First Name</label><br/>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label><br/>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label><br/>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="email">Password</label><br/>
        <Field name="password" component="input" type="password" />
      </div><br/>
      <button type="submit">Submit</button>
    </form>
  )
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm)

export default ContactForm