import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Collapse, NavbarToggler, Navbar} from 'reactstrap';
import NavBarComp from './navbar';

class Meniu extends Component {
    constructor(props) {
        super(props);

        this.toggleInstanta = this.toggleInstanta.bind(this);
        this.toggleInformatii = this.toggleInformatii.bind(this);
        this.toggleInstante = this.toggleInstante.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            dropdownInstanta: false,
            dropdownInformatii: false,
            dropdownInstante: false,
            collapsed: true
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    toggleInstanta() {
        this.setState({
            dropdownInstanta: !this.state.dropdownInstanta
        });
    }
    toggleInformatii() {
        this.setState({
            dropdownInformatii: !this.state.dropdownInformatii
        });
    }
    toggleInstante() {
        this.setState({
            dropdownInstante: !this.state.dropdownInstante
        });
    }
    render() {
        return (
            <Navbar sticky="top" className="navbar-dark text-nowrap bg-dark text-light"  expand="md">
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2"></NavbarToggler>
                <img style={{ width: '3.6%' }} className="mx-2 d-none d-lg-block d-xl-block" src={require("../images/ministerul_justitiei.PNG")} alt="mj"></img>
                <Collapse isOpen={!this.state.collapsed} navbar className="justify-content-center align-items-center">
                    <NavBarComp />
                </Collapse>
                <img style={{ width: '4%' }} className=" d-none d-lg-block d-xl-block " src={require("../images/10011.png")} alt="100"></img>
            </Navbar>
        );
    }
}

export default Meniu;