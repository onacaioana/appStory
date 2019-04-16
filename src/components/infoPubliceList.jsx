import React, { Component } from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import "../css/listStyle.css";

class InfoList extends Component {
    state = { open: true };

    handleChange = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { index, titlu, text } = this.props;

        return (
            <React.Fragment>

                <ListItem key={index} button onClick={this.handleChange}>
                    <ListItemIcon>
                        <img
                            src={require("../images/icons/law2.png")}
                            alt="Lista_concursuri_si_anunturi"
                        />
                    </ListItemIcon>
                    <ListItemText
                        style={{padding:0}}
                        className="ListItemText"
                        inset
                        primary={titlu}
                    />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <p className="TextCollapse">{text}</p>
                </Collapse>
            </React.Fragment>
        );
    }
}

export default InfoList;