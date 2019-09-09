import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { } from '../actions'

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
            isOpen: false,
            isLoggedIn: false
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
        localStorage.clear();
        this.setState({ isLoggedIn: false });
    }

    render() {
        console.log('Test');

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
                                {
                                    !this.state.isLoggedIn ? <Link to={'/login'} className="nav-link">Login</Link> :
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
    console.log(isLoggedIn, 'logged in?');
    console.log(localStorage.getItem('user'), 'user')

    return {
        isLoggedIn
    }
}

export default connect(mapStateToProps, {})(Header);