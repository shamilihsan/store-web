import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { login } from '../actions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Alert, Spinner } from 'reactstrap';


class Login extends React.Component {

    state = {
        success: false,
        error: false,
        isLoading: false
    }

    renderInput = ({ input, label, placeholder, type, name }) => {
        return (
            <FormGroup>
                <Label>{label}</Label>
                <Input type={type} name={name} placeholder={placeholder} onChange={input.onChange} required autoComplete='off' />
            </FormGroup>
        )

    }

    onSubmit = formValues => {

        this.setState({ success: false, error: false, isLoading: true })

        this.props.login(formValues, response => {
            if (response.status === 200) {
                this.setState({ isLoading: false, success: true })
                localStorage.setItem('accesstoken', response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))
            } else {
                console.log(response.message, 'Failed')
                this.setState({ isLoading: false, error: true })
            }
        });
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

                {
                    this.state.isLoading && <Spinner className="mx-auto" style={{ width: '3rem', height: '3rem', marginTop: 20 }} type="grow" disabled={true} />
                }
                

                <Alert color="success" isOpen={this.state.success} style={{ marginTop: 20 }}>
                    Logged in successfully
                </Alert>

                <Alert color="danger" isOpen={this.state.error} style={{ marginTop: 20 }}>
                    Incorrect credentials. Please try again
                </Alert>
            </div>
        )
    }
}

const formWrapped = reduxForm({
    form: 'login'
})(Login);

export default connect(null, { login })(formWrapped)