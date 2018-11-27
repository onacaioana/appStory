import React, { Component } from "react";
import List from "@material-ui/core/List";
import Personal from './Employee';

class ListaPersonal extends Component {
    state = { open: true };

    render() {

        let lista = this.props.personal.map((item, index) => {
            return (
                <Personal
                    key={index}
                    title={item.title}
                    sef={item.sef}
                    team={item.team}
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
