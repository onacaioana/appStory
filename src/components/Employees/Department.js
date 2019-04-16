import React, { Component } from 'react';
import ListItem from "@material-ui/core/ListItem";
import Typography from '@material-ui/core/Typography';
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListaPersonal from './EmployeesList';
import "../../css/organizare.css";

class Sectie extends Component {
    state = {
        open: true
    };

    handleChange = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { sectia, personal } = this.props;
        return (
            <div>
                <ListItem button onClick={this.handleChange} >
                    <ListItemText primary={sectia} className="personalSectie"/>
                    {/* Select which Expand icon to use  */}
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}

                </ListItem>

                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <ListaPersonal
                        personal={personal}
                        expended={this.props.expended}
                    />
                </Collapse>
            </div>
        )
    }
}

export default Sectie;