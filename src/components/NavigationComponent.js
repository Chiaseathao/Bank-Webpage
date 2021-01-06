import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from 'reactstrap';
import { Link } from 'react-scroll'


class Navigation extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
            isNavOpen: false,
        };

    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }


    render() {

        return (

            <div>
                <Navbar expand="md" dark>
                    <div className="container">

                        <NavbarBrand href='/' className="mr-auto navbarbrand-font">Bank</NavbarBrand>

                        <NavbarToggler className='ml-auto' onClick={this.toggleNav} />

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className='mx-auto' navbar>

                                    <NavItem>
                                        <Link
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-55}
                                            duration={500}
                                        >
                                            <a className="nav-link navbarlink-font" href=''>
                                                Home
                                            </a>
                                        </Link>
                                    </NavItem>

                                    <NavItem>
                                        <a className="nav-link navbarlink-font" href=''>
                                            About
                                        </a>
                                    </NavItem>

                                    <NavItem>
                                        <a className="nav-link navbarlink-font" href=''>
                                            Services
                                        </a>
                                    </NavItem>

                                    <NavItem>
                                        <a className="nav-link navbarlink-font" href=''>
                                            Contact
                                        </a>
                                    </NavItem>

                            </Nav>

                            <div className="mr-auto">
                                <Nav navbar>
                                    <NavItem>
                                        <a className="nav-link navbarlink-font" to='#signin'>
                                            Sign in
                                        </a>
                                    </NavItem>
                                </Nav>
                            </div>

                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;