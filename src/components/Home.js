import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getItems } from '../actions/';

class Home extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    renderItems = () => {
        return (
            this.props.items.map(item => {
                return (
                    <div>
                        <li>{item.name}</li>
                    </div>
                )
            })
        )
    }

    render() {
        
        
        if (this.props.items === {}) {
            return (
                <h1>Loading....</h1>
            )
        }
        return (
            <React.Fragment>
                <h1>HOME PAGE</h1>

                <ul>
                    {this.renderItems()}
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.items)
    return {
        items: Object.values(state.items)
    }
}

export default connect(mapStateToProps, { getItems })(Home);