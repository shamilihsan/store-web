import React from 'react'
import { connect } from 'react-redux';
import { placeOrder } from '../actions'
import { Button } from 'reactstrap';

class Cart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
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
            this.props.placeOrder(email, cart, total)
        })
    }

    renderCartItems = () => {

        return (
            this.state.cart.map(cartItem => {
                console.log(cartItem.item);
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

                    <div className="float-right">
                        <Button color="success" onClick={this.placeOrder}>Place Order</Button>
                    </div>

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

const mapStateToProps = (state) => {
    console.log(state.order.status, 'Status')
    return {
        orderStatus: state.order.status
    }
}

export default connect(mapStateToProps, { placeOrder })(Cart);