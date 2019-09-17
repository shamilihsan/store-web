import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import history from '../history';

import { logout } from '../actions'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        if (localStorage.getItem('user')) {
            this.setState({ isLoggedIn: true })
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout = () => {
        this.props.logout();
        localStorage.clear();
        history.push('/')
    }

    render() {

        return (
            <div>
                <Navbar fixed={'top'} color="light" light expand="md">
                    <Link to={'/'}><div className="navbar-brand">Store</div></Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to={'/cart'} className="nav-link">Cart</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={'/orders'} className="nav-link">Orders</Link>
                            </NavItem>
                            <NavItem>
                                {
                                    !this.props.isLoggedIn ? <Link to={'/login'} className="nav-link">Login</Link> :
                                        <NavItem onClick={this.logout} className="nav-link">Logout</NavItem>
                                }
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                  </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                  </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                  </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { isLoggedIn } = state.auth

    return {
        isLoggedIn
    }
}

export default connect(mapStateToProps, { logout })(Header);