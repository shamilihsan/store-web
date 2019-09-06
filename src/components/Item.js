import React from 'react';
import { connect } from 'react-redux'
import { getItem } from '../actions'

class Item extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            cartItems: []
        }
    }

    componentDidMount() {
        this.props.getItem(this.props.match.params.id);
    }

    addToCart = () => {
        const { item } = this.props;

        if (localStorage.getItem('cart') == null) {
            //Add a new cart
            let cart = [];
            cart.push({ item: item, quantity: 1 })
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            let cart = JSON.parse(localStorage.getItem('cart'))
            //Find index where item already exists
            const cartItemIndex = cart.findIndex(cp => {
                return cp.item._id.toString() === item._id.toString()
            })
            let newQuantity = 1
            const updatedCartItems = JSON.parse(localStorage.getItem('cart'));
            //If item exists increase quantity, else add new item to cart
            if (cartItemIndex >= 0) {
                newQuantity = updatedCartItems[cartItemIndex].quantity + 1
                updatedCartItems[cartItemIndex].quantity = newQuantity
            } else {
                updatedCartItems.push({
                    item: item,
                    quantity: newQuantity
                })
            }
            localStorage.setItem('cart', JSON.stringify(updatedCartItems))
        }

        this.loadCart();
    }

    loadCart = () => {
        console.log(JSON.parse(localStorage.getItem('cart')))
    }

    render() {
        const { item } = this.props;

        if (!item) {
            return (
                <h1 className="text-center">Loading...</h1>
            )
        }

        return (
            <React.Fragment>
                <h1 className="text-center" style={{ paddingTop: '50px' }}>{item.name}</h1>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://dummyimage.com/600x400/000/fff" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h5 className="card-title">{item.description}</h5>
                        <p className="card-text">Rs.{item.price}</p>
                        <a onClick={this.addToCart} className="btn btn-primary text-white">Add to Cart</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.items[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { getItem })(Item)