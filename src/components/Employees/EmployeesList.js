import React, { Component } from "react";
import List from "@material-ui/core/List";
import Employee from './Employee';

class ListaPersonal extends Component {
    state = { open: true };

    render() {

        let lista = this.props.personal.map((item, index) => {
            return (
                <Employee
                    key={index}
                    title={item.title}
                    sef={item.sef}
                    team={item.team}
                    expended={this.props.expended}
                />
            )
        })

        return (
            <React.Fragment>
                <List
                    component="div"
                    disablePadding
                >
                    {lista}
                </List>
            </React.Fragment >

        );
    }
}

export default ListaPersonal;
