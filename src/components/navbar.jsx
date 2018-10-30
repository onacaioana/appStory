import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";


class NavBarComp extends Component {
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
                    <Nav className="m-auto" navbar style={{fontSize:"14px"}} >
                        <NavItem className="mr-4">
                            <NavLink href="/home" >ACASĂ</NavLink>
                        </NavItem>

                        <Dropdown nav isOpen={this.state.dropdownInstanta} toggle={this.toggleInstanta}>
                            <DropdownToggle nav caret>
                                DESPRE INSTANŢĂ
                                </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/prezentare">Prezentare</DropdownItem>
                                <DropdownItem href="/organizare">Organizare</DropdownItem>
                                <DropdownItem href="http://portal.just.ro/117/SitePages/Circumscriptii.aspx?id_inst=117">Circumscripţie</DropdownItem>
                                <DropdownItem href="/rapoarte">Instaţa în cifre</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown nav isOpen={this.state.dropdownInformatii} toggle={this.toggleInformatii}>
                            <DropdownToggle nav caret>
                                INFORMAŢII
                                </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/concurs">Anunţuri / Concursuri</DropdownItem>
                                <DropdownItem href="/infoPublice">Informaţii publice</DropdownItem>
                                <DropdownItem href="/declaratii">Declaraţii</DropdownItem>
                                <DropdownItem href="/comunicate">Comunicate de presă</DropdownItem>
                                <DropdownItem href="/hotarari">Hotărâri de colegiu</DropdownItem>
                                <DropdownItem href="http://portal.just.ro/117/SitePages/jurisprudenta.aspx?id_inst=117">Jurisprudenţă</DropdownItem>
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
                            <NavLink href="/contact">CONTACT</NavLink>
                        </NavItem>
                    </Nav>
        );
    }
}

export default NavBarComp;

