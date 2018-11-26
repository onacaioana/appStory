import React, { Component } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from '@material-ui/core/Typography';
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListaPersonal from './ListaPersonal';
class Sectie extends Component {
    state = { open: false };

    handleChange = () => {
        this.setState({ open: !this.state.open });
    };
    render() {
        const { sectia, personal } = this.props;
        return (
            <div>
                <ListItem className="h2 text-primary" style={{ color: "red" }} button onClick={this.handleChange} >
                    <ListItemText
                        primary={
                            <Typography
                                color="secondary"
                                className="mx-1 py-2"
                                variant="headline"
                            >
                                {sectia}
                            </Typography>
                        }
                    />
                    {/* Select which Expand icon to use  */}
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}

                </ListItem>

                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <ListaPersonal
                        personal={personal}
                    />
                </Collapse>
            </div>
        )
    }
}

export default Sectie;