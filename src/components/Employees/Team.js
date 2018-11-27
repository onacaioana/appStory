import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

class Team extends Component {

    render() {
        let persoana = this.props.team.map((item, index) => {
            return (
                <ListItem className="mx-2" key={index} >
                    <ListItemText
                        color="white"
                        inset
                        primary={item}
                    />
                </ListItem >
            )
        })

        return (
            <List
                component="div"
                disablePadding
            >
                {persoana}
            </List>
        );
    }
}

export default Team;