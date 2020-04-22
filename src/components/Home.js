import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { getItems } from '../actions/';

class Home extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    renderItems = () => {
        return (
            this.props.items.map(item => {
                return (
                    <Link to={`/shop/${item._id}`} key={item._id}><li >{item.name}</li></Link>
                )
            })
        )
    }

    render() {
        console.log('Vendor => ', this.props.vendor);

        if (this.props.items.length === 0) {
            return (
                <h1>Loading....</h1>
            )
        }
        return (
            <React.Fragment>
                {this.props.vendor && (
                    <React.Fragment>
                        <h1 className="text-center" style={{ paddingTop: 100 }}>{this.props.vendor.name}</h1>
                        <h1 className="text-center" style={{ paddingTop: 100 }}>{this.props.vendor.email}</h1>
                        {this.props.vendor.items.map((item, index) => {
                            return (
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src="https://dummyimage.com/600x400/000/fff" className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.itemName}</h5>
                                        <h5 className="card-title">{item.itemDesc}</h5>
                                        <p className="card-text">Rs.{item.price}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </React.Fragment>)}
                <h1 className="text-center" style={{ paddingTop: 100 }}>HOME</h1>

                <ul>
                    {this.renderItems()}
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: Object.values(state.items),
        vendor: state.vendor
    }
}

export default connect(mapStateToProps, { getItems })(Home);