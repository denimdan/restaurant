import React, { Component } from 'react'
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import DatePicker from 'reactstrap-date-picker';
import '../App.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            selectedDate: new Date().toISOString(),
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    setDate(date) {
        this.setState({
            selectedDate: date
        })
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
        if (this.state.isNavOpen) {
            this.toggleNav()
        }
        
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    <div className="container header">
                        <div className="row">
                            <div className="col">
                                <h1>Our Restaurant</h1>
                                <h2>a better way to eat</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="sm" className="fixed-top">
                    <div className="container">

                        <NavbarToggler className="ml-auto" onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" onClick={this.toggleNav}>
                                        <i className="fa fa-home" aria-hidden="true" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about" onClick={this.toggleNav}>
                                        <i className="fa fa-list-alt" aria-hidden="true" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu" onClick={this.toggleNav}>
                                        <i className="fa fa-cutlery" aria-hidden="true" /> Menu
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button color="light" outline onClick={this.toggleModal}>
                                    <i className="fa fa-calendar" aria-hidden="true" />  Reserve a Table
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="resModal">
                    <ModalHeader className="modal-header" toggle={this.toggleModal}>Reserve a Table</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name" placeholder="Your Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="phone">Phone #</Label>
                                <Input type="text" id="phone" name="phone" placeholder="Your Phone Number" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Email</Label>
                                <Input type="text" id="email" name="email" placeholder="Your E-mail Address" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="numGuest"># of Guests</Label>
                                <Input type="select" id="numGuest" name="numGuest">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="date">Date: </Label>
                                <DatePicker
                                    id="date"
                                    value={this.state.selectedDate}
                                    onChange={date => this.setDate(date)} 
                                    minDate={new Date().toISOString()}
                                    />
                            </FormGroup>
                            <FormGroup>
                            <Label htmlFor="time">Time :</Label>
                            <Input type="select" id="time" name="time" />
                            </FormGroup>
                            <Button type="submit" color="dark">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header;