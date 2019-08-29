import React from 'react';
import { connect } from 'react-redux'
import { getItem } from '../actions'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Item extends React.Component {

    componentDidMount() {
        this.props.getItem(this.props.match.params.id);
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
                <h1 className="text-center" style={{paddingTop: '50px'}}>{item.name}</h1>
                <div style={{ paddingTop: '50px', maxWidth: '400px' }}>
                    <Card>
                        <CardImg top width="100%" src="https://dummyimage.com/600x400/000/fff" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            <CardSubtitle>{item.description}</CardSubtitle>
                            <CardText>{item.price}</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
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