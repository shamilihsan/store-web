import React from 'react'
import { Button } from 'reactstrap';

class Cart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cart: [],
            total: 0
        }
    }

    componentDidMount() {
        const cart = JSON.parse(localStorage.getItem('cart'))
        this.setState({ cart })
        let total = 0;

        cart.map(val => {
            total += val.item.price * val.quantity
        })
        this.setState({ total })

    }

    placeOrder = () => {
        console.log('Place order')
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
        return (
            <div className="container" style={{ paddingTop: 100 }}>
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
}

export default Cart;