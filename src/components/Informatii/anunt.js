import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListOfDocs from "../listOfDocs";

class Anunt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleChange = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <React.Fragment>
        <ListItem button onClick={this.handleChange}>
          <ListItemIcon>
            <img
              src={require("../../images/icons/list.png")}
              alt="list concursuri si anunturi"
            />
          </ListItemIcon>
          <ListItemText
            inset
            primary={this.props.titlu}
            secondary={this.props.subtitlu}
          />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <ListOfDocs
            // list={item.listOfDocs}
            list={this.props.docs}
            button={true}
            icon={require("../../images/icons/arow2.png")}
            component="div"
          />
        </Collapse>
      </React.Fragment>
    );
  }
}

export default Anunt;
