import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Team from './Team';
import "../../css/organizare.css";

class Employee extends Component {
  state = { open: false};

  handleChange = () => {
    this.setState({ open: !this.state.open });
  };

  componentWillMount(){
    this.setState({open: this.props.expended});
  }

  render() {
    const { title, team, sef } = this.props;
    return (
      <div >
        <ListItem button onClick={this.handleChange}>
          <ListItemIcon>
            <img
              src={require("../../images/icons/arow2.png")}
              alt="Icon_lista_personal_subsectii"
            />
          </ListItemIcon>
          <ListItemText
          className="personalSubsectii"
            primary={title}
            secondary={sef}
          />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <Team team={team} />
        </Collapse>
      </div>
    )
  }
}

export default Employee;
