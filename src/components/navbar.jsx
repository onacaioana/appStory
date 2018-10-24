import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Nav,
  Collapse,
  NavbarToggler,
  Navbar,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";

class NavBar extends Component {
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
      <Navbar
        sticky="top"
        style={{ fontSize: "18px", backgroundColor: "#276c90" }}
        className="navbar-dark text-nowrap bg-dark text-light"
        expand="md"
      >
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <img
          style={{ width: "3%" }}
          className="mx-2 d-none d-lg-block d-xl-block"
          src={require("../images/ministerul_justitiei.PNG")}
          alt="mj"
        />
        <h5 className="mb-1">Tribunalul Cluj</h5>
        <Collapse
          isOpen={!this.state.collapsed}
          navbar
          className="justify-content-center align-items-center"
        >
          <Nav className="ml-3" navbar>
            <NavItem className="mr-4">
              <NavLink href="/home">Acasă</NavLink>
            </NavItem>

            <Dropdown
              nav
              isOpen={this.state.dropdownInstanta}
              toggle={this.toggleInstanta}
            >
              <DropdownToggle nav caret>
                Despre Instanţă
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/prezentare">Prezentare</DropdownItem>
                <DropdownItem href="/organizare">Organizare</DropdownItem>
                <DropdownItem>Circumscripţie</DropdownItem>
                <DropdownItem>Instaţa în cifre</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown
              nav
              isOpen={this.state.dropdownInformatii}
              toggle={this.toggleInformatii}
            >
              <DropdownToggle nav caret>
                Informaţii
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Concursuri</DropdownItem>
                <DropdownItem>Informaţii publice</DropdownItem>
                <DropdownItem href="/informatii/anunturi">
                  Anunţuri
                </DropdownItem>
                <DropdownItem>Declaraţii</DropdownItem>
                <DropdownItem>Comunicate de presă</DropdownItem>
                <DropdownItem>Hotărâri de colegiu</DropdownItem>
                <DropdownItem>Jurisprudenţă</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem className="mr-4">
              <NavLink href="https://www.curteadeapelcluj.ro/Dosare_ecris.aspx">
                InfoDosar
              </NavLink>
            </NavItem>

            <Dropdown
              nav
              isOpen={this.state.dropdownInstante}
              toggle={this.toggleInstante}
            >
              <DropdownToggle nav caret>
                Instanţe
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="http://portal.just.ro/211/SitePages/acasa_default.aspx?id_inst=211">
                  Judecătoria Cluj-Napoca
                </DropdownItem>
                <DropdownItem href="http://portal.just.ro/219/SitePages/acasa_default.aspx?id_inst=219">
                  Judecătoria Dej
                </DropdownItem>
                <DropdownItem href="http://portal.just.ro/242/SitePages/acasa_default.aspx?id_inst=242">
                  Judecătoria Huedin
                </DropdownItem>
                <DropdownItem href="http://portal.just.ro/235/SitePages/acasa_default.aspx?id_inst=235">
                  Judecătoria Gherla
                </DropdownItem>
                <DropdownItem href="http://portal.just.ro/328/SitePages/acasa_default.aspx?id_inst=328">
                  Judecătoria Turda
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem className="mr-4">
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <img
          style={{ width: "4%" }}
          className="float-left d-none d-lg-block d-xl-block "
          src={require("../images/10011.png")}
          alt="100"
        />
      </Navbar>
    );
  }
}

export default NavBar;
