import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

    import RegisterModal from '../Components/Auth/RegisterModal';
    import LoginModal from '../Components/Auth/LoginModal';
  
  export default class NavBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">AirBnB Price Navigator</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">About Us</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Join/Login
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <RegisterModal />
                    </DropdownItem>
                    <DropdownItem>
                      <LoginModal />
                    </DropdownItem>
                    <DropdownItem divider />
                    {/* <DropdownItem>
                      Reset
                    </DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }