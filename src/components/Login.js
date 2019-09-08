import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends React.Component {
    render() {
        return (
            <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                <h1 className="text-center">Login</h1>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Login;