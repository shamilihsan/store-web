import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addVendor } from '../actions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Alert, Spinner } from 'reactstrap'

import history from '../history';


class Vendor extends React.Component {

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

    renderItems = ({ fields, meta: { error, submitFailed } }) => {
        return (
            <React.Fragment>
                <Button type="button" onClick={() => fields.push({})}>
                    Add Item
            </Button>
                {
                    fields.map((item, index) => (
                        <div key={index}>
                            <Button
                                type="button"
                                onClick={() => fields.remove(index)}
                            >Remove Item</Button>
                            <h4>item #{index + 1}</h4>
                            <Field
                                name={`${item}.itemName`}
                                type="text"
                                component={this.renderInput}
                                label="Item Name"
                            />
                            <Field
                                name={`${item}.price`}
                                type="text"
                                component={this.renderInput}
                                label="Price"
                            />
                            <Field
                                name={`${item}.itemDesc`}
                                type="text"
                                component={this.renderInput}
                                label="Description"
                            />
                        </div>
                    ))
                }
            </React.Fragment>
        );
    }

    onSubmit = formValues => {
        this.props.addVendor(formValues);
        history.push('/');
    }

    render() {
        return (
            <div className="container d-flex flex-column justify-content-center mx-auto" style={{ marginTop: '8em', maxWidth: '42em' }}>
                <h1 className="text-center" style={{ paddingBottom: 20 }}>Sign Up - Vendor</h1>
                <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="email" component={this.renderInput} label="Email" placeholder="JohnDoe@gmail.com" type="email" />
                    <Field name="password" component={this.renderInput} label="Password" placeholder="Password" type="password" />
                    <Field name="name" component={this.renderInput} label="Name" placeholder="Vendor Pvt Ltd." type="text" />

                    <FieldArray name="items" component={this.renderItems} />
                    <Button>Submit</Button>


                </Form>

                {
                    this.state.isLoading && <Spinner className="mx-auto" style={{ width: '3rem', height: '3rem', marginTop: 20 }} type="grow" disabled={true} />
                }


                <Alert color="success" isOpen={this.state.success} style={{ marginTop: 20 }}>
                    Added new vendor
                </Alert>

                <Alert color="danger" isOpen={this.state.error} style={{ marginTop: 20 }}>
                    Incorrect details. Please try again
                </Alert>
            </div>
        )
    }
}

const formWrapped = reduxForm({
    form: 'vendor'
})(Vendor);

export default connect(null, { addVendor })(formWrapped)