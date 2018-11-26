import React, { Component } from 'react';
import List from "@material-ui/core/List";
import Sectie from './sectie';
class ListaSectii extends Component {
    render() {
        let sectii = this.props.list.map((item, index) => {
            return (
                <Sectie
                    key={index}
                    sectia={item.sectia}
                    personal={item.personal}
                    index={index}
                />
            )
        })

        return (
            <React.Fragment>
                <List component="div" disablePadding >
                    {sectii}
                </List>
            </React.Fragment >

        );
    }
}

export default ListaSectii;