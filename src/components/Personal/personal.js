import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Team from './team';

class ListOfDocs extends Component {
  state = { open: false };

  handleChange = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { title, team, sef, index } = this.props;
    return (
      <div >
        <ListItem button onClick={this.handleChange}>
          <ListItemIcon>
            <img
              src={require("../../images/icons/arow2.png")}
              alt="Lista_concursuri_si_anunturi"
            />
          </ListItemIcon>
          <ListItemText
            inset
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

export default ListOfDocs;
