import React from 'react'
import { connect } from 'react-redux';
import { placeOrder } from '../actions'
import { Button } from 'reactstrap';

import history from '../history';

import { Alert, Spinner } from 'reactstrap';

class Cart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            orderSuccess: false,
            orderFail: false,
            cart: [],
            total: 0
        }
    }

    componentDidMount() {
        const cart = JSON.parse(localStorage.getItem('cart'))

        this.setState({ cart })
        let total = 0;
        if (cart) {
            cart.map(val => {
                total += val.item.price * val.quantity
            })
        }

        this.setState({ total })

    }

    placeOrder = () => {
        this.setState({ loading: true }, () => {
            const email = JSON.parse(localStorage.getItem('user')).email;
            const { cart, total } = this.state;

            this.props.placeOrder(email, cart, total, response => {
                if (response.status === 201) {
                    localStorage.removeItem('cart')
                    this.setState({ loading: false, orderSuccess: true }, () => {
                        setTimeout(() => {
                            history.push('/')
                        }, 2000)
                    })
                } else {
                    this.setState({ loading: false, orderFail: true })
                }
            })
        })
    }

    renderCartItems = () => {

        return (
            this.state.cart.map(cartItem => {
                return (
                    <React.Fragment key={cartItem.item._id}>
                        <tr>
                            <td>{cartItem.item.name}</td>
                            <td>{cartItem.item.price}</td>
                            <td>{cartItem.quantity}</td>
                            <td>{cartItem.item.price * cartItem.quantity}</td>
                        </tr>
                    </React.Fragment>
                )
            })
        )
    }

    render() {
        if (this.state.cart) {
            return (
                <div className="container">
                    <h1 className="text-center">Cart</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderCartItems()}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="font-weight-bold">{this.state.total}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div className="row clearfix text-left">
                        <div className="float-right">
                            <Button color="success" onClick={this.placeOrder}>Place Order</Button>
                        </div>
                    </div>

                    {
                        this.state.loading && <Spinner className="mx-auto" style={{ width: '3rem', height: '3rem', marginTop: 20 }} type="grow" disabled={true} />
                    }

                    <Alert color="success" isOpen={this.state.orderSuccess} style={{ marginTop: 20 }}>
                        Order Successfully Placed
                    </Alert>

                    <Alert color="danger" isOpen={this.state.orderFail} style={{ marginTop: 20 }}>
                        Something went wrong, please try again!
                    </Alert>
                </div>
            )
        }

        return (
            <div className="container" style={{ paddingTop: 100 }}>
                <h1 className="text-center">Cart</h1>
                <h4>No items added to cart</h4>
            </div>
        )

    }
}

export default connect(null, { placeOrder })(Cart);