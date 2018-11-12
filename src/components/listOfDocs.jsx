import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';

class ListOfDocs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    handleClick = (data) => {
        console.log('I will open a link', data);
    }

    componentDidMount() {
        const items = this.props.list.map((item, index) => {
            return (
                <ListItem key={index}
                    className="mx-5 px-5 "
                    button={this.props.button}
                    onClick={() => this.handleClick(item.locatie)}
                >
                    {
                        this.props.icon
                            ? <ListItemIcon className="mx-1 px-1"

                            >
                                <img src={this.props.icon}
                                    alt="Icon_Lista_De_Documente">
                                </img>
                            </ListItemIcon>
                            : ""
                    }
                    <ListItemText color="white" inset primary={item.titlu}
                        secondary={item.data}
                    />
                </ListItem>
            )
        });
        this.setState({ items: items });
    }

    render() {

        return (
            <List component={this.props.component} disablePadding subheader={this.props.subheader} >
                {this.state.items}
            </List>
        )
    }
}

export default ListOfDocs;