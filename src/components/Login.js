import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { login } from '../actions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends React.Component {

    renderInput = ({ input, label, placeholder, type, name }) => {
        return (
            <FormGroup>
                <Label>{label}</Label>
                <Input type={type} name={name} placeholder={placeholder} onChange={input.onChange} required autoComplete='off' />
            </FormGroup>
        )

    }

    onSubmit = formValues => {
        this.props.login(formValues);
    }

    render() {
        return (
            <div className="container d-flex flex-column justify-content-center mx-auto" style={{ height: '100vh', maxWidth: '42em' }}>
                <h1 className="text-center" style={{ paddingBottom: 20 }}>Login</h1>
                <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="email" component={this.renderInput} label="Email" placeholder="JohnDoe@gmail.com" type="email" />
                    <Field name="password" component={this.renderInput} label="Password" placeholder="Password" type="password" />
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

const formWrapped = reduxForm({
    form: 'login'
})(Login);

export default connect(null, { login })(formWrapped)