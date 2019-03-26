import React, { Component } from 'react';
import List from "@material-ui/core/List";
import Department from './Department';
class ListaSectii extends Component {
    render() {
        let departamente = this.props.list.map((item, index) => {
            return (
                <Department
                    key={index}
                    sectia={item.sectia}
                    personal={item.personal}
                    index={index}
                    expended={this.props.expended}
                />
            )
        })

        return (
            <React.Fragment>
                <List component="div" disablePadding >
                    {departamente}
                </List>
            </React.Fragment >

        );
    }
}

export default ListaSectii;