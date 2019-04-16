import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

class Team extends Component {

    render() {
        let persoana = this.props.team.map((item, index) => {
            return (
                <ListItem key={index} >
                    <ListItemText
                        className="personalAngajat"
                        inset
                        primary={item}
                    />
                </ListItem >
            )
        })

        return (
            <List component="div" disablePadding>
                {persoana}
            </List>
        );
    }
}

export default Team;