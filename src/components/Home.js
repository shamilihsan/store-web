import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

import { getItems } from '../actions/';

class Home extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    renderItems = () => {
        return (
            this.props.items.map(item => {
                return (
                    <Link to={`/shop/${item._id}`}><li key={item._id}>{item.name}</li></Link>
                )
            })
        )
    }

    render() {
        console.log(this.props.items)

        if (this.props.items.length === 0) {
            console.log('test')
            return (
                <h1>Loading....</h1>
            )
        }
        return (
            <React.Fragment>
                <h1 className="text-center">HOME</h1>

                <ul>
                    {this.renderItems()}
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: Object.values(state.items)
    }
}

export default connect(mapStateToProps, { getItems })(Home);