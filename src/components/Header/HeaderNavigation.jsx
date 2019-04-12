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
        this.toggleOrganizare = this.toggleOrganizare.bind(this);

        this.onMouseEnterInstanta = this.onMouseEnterInstanta.bind(this);
        this.onMouseLeaveInstanta = this.onMouseLeaveInstanta.bind(this);
        this.onMouseEnterInformatii = this.onMouseEnterInformatii.bind(this);
        this.onMouseLeaveInformatii = this.onMouseLeaveInformatii.bind(this);
        this.onMouseEnterInstante = this.onMouseEnterInstante.bind(this);
        this.onMouseLeaveInstante = this.onMouseLeaveInstante.bind(this);
        this.onMouseEnterOrganizare = this.onMouseEnterOrganizare.bind(this);
        this.onMouseLeaveOrganizare = this.onMouseLeaveOrganizare.bind(this);


        this.state = {
            dropdownInstanta: false,
            dropdownInformatii: false,
            dropdownInstante: false,
            collapsed: true,
        };
    }

    /** Functions for Dropdown  
        "Despre Institutie" 
        toggle - for open close (no nedded anymore)?!
        onMouseEnter - to open Dropdown Menu on hover 
        onMouseLeave - to close Dropdown menu on hover
     **/
    onMouseEnterInstanta() {
        this.setState({ dropdownInstanta: true });
    }
    onMouseLeaveInstanta() {
        setTimeout(function () { //Start the timer
            this.setState({ dropdownInstanta: false });
        }.bind(this), 500);

    }
    toggleInstanta() {
        this.setState({
            dropdownInstanta: !this.state.dropdownInstanta
        });
    }

    /** Functions for Dropdown "Informatii"  
      * toggle - for open close (no nedded anymore)?!
      * onMouseEnter - to open Dropdown Menu on hover 
      * onMouseLeave - to close Dropdown menu on hover
     **/
    onMouseEnterInformatii() {
        this.setState({ dropdownInformatii: true });
    }
    onMouseLeaveInformatii() {
        setTimeout(function () { //Start the timer
            this.setState({ dropdownInformatii: false });
        }.bind(this), 500);


    }
    toggleInformatii() {
        this.setState({
            dropdownInformatii: !this.state.dropdownInformatii
        });
    }

    /** Functions for Dropdown "Instante"  
      * toggle - for open close (no nedded anymore)?!
      * onMouseEnter - to open Dropdown Menu on hover 
      * onMouseLeave - to close Dropdown menu on hover
     **/
    onMouseEnterInstante() {
        this.setState({ dropdownInstante: true });
    }
    onMouseLeaveInstante() {
        setTimeout(function () { //Start the timer
            this.setState({ dropdownInstante: false });
        }.bind(this), 500);
    }
    toggleInstante() {
        this.setState({
            dropdownInstante: !this.state.dropdownInstante
        });
    }

    /** Functions for Dropdown "Organizare"  
      * toggle - for open close (no nedded anymore)?!
      * onMouseEnter - to open Dropdown Menu on hover 
      * onMouseLeave - to close Dropdown menu on hover
     **/
    onMouseEnterOrganizare() {
        this.setState({ dropdownOrganizare: true });
    }
    onMouseLeaveOrganizare() {
        setTimeout(function () { //Start the timer
            this.setState({ dropdownOrganizare: false });
        }.bind(this), 500);
    }
    toggleOrganizare() {
        this.setState({
            dropdownOrganizare: !this.state.dropdownOrganizare
        });
    }


    toggleNavbar() {
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
            <Navbar className="bg-light navbar-light text-black text-nowrap m-auto" expand="lg">
                <NavbarBrand href={`${process.env.PUBLIC_URL}/#/`}>
                    <img src={require("../../images/mjLogo.png")} alt="mj" />
                </NavbarBrand>

                <NavbarToggler onClick={this.toggleNavbar} ></NavbarToggler>

                <Collapse isOpen={!this.state.collapsed} navbar >

                    <Nav className="m-auto" navbar >
                        <NavItem className="mr-4">
                            <NavLink onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/`} >Acasă</NavLink>
                        </NavItem>

                        <Dropdown
                            isOpen={this.state.dropdownInstanta}
                            /* onMouseOver={this.onMouseEnterInstanta} onMouseLeave={this.onMouseLeaveInstanta} */
                            toggle={this.toggleInstanta}>

                            <DropdownToggle nav caret> Despre Instituţie</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/prezentare`}>Prezentare</DropdownItem>
                                <Dropdown
                                    className="px-4"
                                    nav
                                    direction='right'
                                    isOpen={this.state.dropdownOrganizare}
                                    toggle={this.toggleOrganizare}
                                        /* onMouseOver={this.onMouseEnterOrganizare} onMouseLeave={this.onMouseLeaveOrganizare} */>

                                    <DropdownToggle nav caret style={{ color: 'black', mrgin: '0px', padding: '0px' }}>Organizare</DropdownToggle>

                                    <DropdownMenu style={{ border: 0 }}>
                                        <DropdownItem onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/conducere`}>Conducere</DropdownItem>
                                        <DropdownItem onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/organizare`}>Structură organizatorică</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                                <DropdownItem onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/competente`}>Competenţe şi Circumscripţie</DropdownItem>
                                <DropdownItem onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/rapoarte`}>Instaţa în cifre</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown nav
                            isOpen={this.state.dropdownInformatii}
                            toggle={this.toggleInformatii}
                        /*  onMouseOver={this.onMouseEnterInformatii} onMouseLeave={this.onMouseLeaveInformatii} */
                        >
                            <DropdownToggle nav caret>
                                Informaţii
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
                            <NavLink href="https://www.curteadeapelcluj.ro/Dosare_ecris.aspx">Info-Dosar</NavLink>
                        </NavItem>
                        <NavItem className="mr-4">
                            <NavLink href="https://www.curteadeapelcluj.ro/ListeSedinta.aspx">Info-Şedinţe</NavLink>
                        </NavItem>

                        <Dropdown nav
                            isOpen={this.state.dropdownInstante}
                            toggle={this.toggleInstante}
                        /*  onMouseOver={this.onMouseEnterInstante} onMouseLeave={this.onMouseLeaveInstante} */
                        >
                            <DropdownToggle nav caret>Instanţe</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="http://portal.just.ro/211/SitePages/acasa_default.aspx?id_inst=211">Judecătoria Cluj-Napoca</DropdownItem>
                                <DropdownItem href="http://portal.just.ro/219/SitePages/acasa_default.aspx?id_inst=219">Judecătoria Dej</DropdownItem>
                                <DropdownItem href="http://portal.just.ro/242/SitePages/acasa_default.aspx?id_inst=242">Judecătoria Huedin</DropdownItem>
                                <DropdownItem href="http://portal.just.ro/235/SitePages/acasa_default.aspx?id_inst=235">Judecătoria Gherla</DropdownItem>
                                <DropdownItem href="http://portal.just.ro/328/SitePages/acasa_default.aspx?id_inst=328">Judecătoria Turda</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem className="mr-4">
                            <NavLink onClick={this.closeNavbar} href={`${process.env.PUBLIC_URL}/#/contact`}>Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <img style={{ width: '5%' }} className=" d-none d-lg-block d-xl-block " src={require("../../images/100.png")} alt="100"></img>
            </Navbar>
        );
    }
}

export default NavBarComp;

