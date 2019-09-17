import React from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../actions'

class Orders extends React.Component {

    componentDidMount() {
        this.props.getOrders();
    }

    render() {
        console.log(this.props.orders, 'orders');
        
        return (
            <h1 className="text-center" style={{ paddingTop: 100 }}>Orders</h1>
        )
    }
}

const mapStateToProps = (state) => {
    const {orders} = state.order
    return {
        orders
    }
}

export default connect(mapStateToProps, { getOrders })(Orders);