import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Navbar
} from "reactstrap";


class NavBarComp extends Component {
    constructor(props) {
        super(props);


        this.toggleInstanta = this.toggleInstanta.bind(this);
        this.toggleInformatii = this.toggleInformatii.bind(this);
        this.toggleInstante = this.toggleInstante.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            dropdownInstanta: false,
            dropdownInformatii: false,
            dropdownInstante: false,
            collapsed: true,
        };
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

    toggleNavbar() {
        console.log("::::");
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    closeNavbar() {
        if (this.state.collapsed !== true) {
            this.toggleNavbar();
        }
    }
    render() {
        return (
            <Navbar style={{paddingTop:3,paddingBottom:3}} className="navbar-dark text-nowrap m-auto bg-dark text-light" expand="md">
                <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2"></NavbarToggler>
                <a href={`${process.env.PUBLIC_URL}/#/`}><img className="mx-2 d-none d-lg-block d-xl-block" src={require("../../images/mjLogo.png")} alt="mj" /></a>
                <Collapse  className="m-auto" isOpen={!this.state.collapsed} navbar >

                    <Nav className="m-auto" navbar style={{ fontSize: "14px" }} >
                        <NavItem className="mr-4">
                            <NavLink onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/`} >ACASĂ</NavLink>
                        </NavItem>

                        <Dropdown nav isOpen={this.state.dropdownInstanta} toggle={this.toggleInstanta}>
                            <DropdownToggle nav caret>
                                DESPRE INSTANŢĂ
                                </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/prezentare`}>Prezentare</DropdownItem>
                                <DropdownItem onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/organizare`}>Organizare</DropdownItem>
                                <DropdownItem onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/competente`}>Competenţe</DropdownItem>
                                <DropdownItem onClick={this.closeNavbar} href="http://portal.just.ro/117/SitePages/Circumscriptii.aspx?id_inst=117">Circumscripţie</DropdownItem>
                                <DropdownItem onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/rapoarte`}>Instaţa în cifre</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown nav isOpen={this.state.dropdownInformatii} toggle={this.toggleInformatii}>
                            <DropdownToggle nav caret>
                                INFORMAŢII
                                </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={this.closeNavbar} href="https://www.curteadeapelcluj.ro/anunturi.html">Anunţuri / Concursuri</DropdownItem>
                                <DropdownItem onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/infoPublice`}>Informaţii publice</DropdownItem>
                                <DropdownItem onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/declaratii`}>Declaraţii</DropdownItem>
                                <DropdownItem onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/comunicate`}>Comunicate de presă</DropdownItem>
                                <DropdownItem onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/hotarari`}>Hotărâri de colegiu</DropdownItem>
                                <DropdownItem onClick={this.closeNavbar} href="http://portal.just.ro/117/SitePages/jurisprudenta.aspx?id_inst=117">Jurisprudenţă</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem className="mr-4">
                            <NavLink href="https://www.curteadeapelcluj.ro/Dosare_ecris.aspx">INFO-DOSAR</NavLink>
                        </NavItem>
                        <NavItem className="mr-4">
                            <NavLink href="https://www.curteadeapelcluj.ro/ListeSedinta.aspx">INFO-ŞEDINŢE</NavLink>
                        </NavItem>

                        <Dropdown nav isOpen={this.state.dropdownInstante} toggle={this.toggleInstante}>
                            <DropdownToggle nav caret>INSTANŢE</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="http://portal.just.ro/211/SitePages/acasa_default.aspx?id_inst=211">Judecătoria Cluj-Napoca</DropdownItem>
                                <DropdownItem href="http://portal.just.ro/219/SitePages/acasa_default.aspx?id_inst=219">Judecătoria Dej</DropdownItem>
                                <DropdownItem href="http://portal.just.ro/242/SitePages/acasa_default.aspx?id_inst=242">Judecătoria Huedin</DropdownItem>
                                <DropdownItem href="http://portal.just.ro/235/SitePages/acasa_default.aspx?id_inst=235">Judecătoria Gherla</DropdownItem>
                                <DropdownItem href="http://portal.just.ro/328/SitePages/acasa_default.aspx?id_inst=328">Judecătoria Turda</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem className="mr-4">
                            <NavLink onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/contact`}>CONTACT</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <img style={{ width: '5%' }} className=" d-none d-lg-block d-xl-block " src={require("../../images/10011.png")} alt="100"></img>
            </Navbar>
        );
    }
}

export default NavBarComp;

