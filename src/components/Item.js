import React from 'react';

class Item extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params.id);
    }

    render() {
        return (
            <h1 className="text-center">Item</h1>
        )
    }
}

export default Item