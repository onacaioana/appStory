import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import Doc from './doc'
import Pdf from "./Pdf/pdf";
import axios from "axios";

class ListOfDocs extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        items: [],
        blob: [],
        openFile: 12
    };

    // handleClick = data => {
    //     console.log("I will open a link", data);
    // };

    handleClickToOpen = (fileName, e, index) => {
        // console.log(fileName);
        axios
            .get(`http://localhost:8080/ass`, {
                params: {
                    fileName: fileName
                }
            })
            .then(res => {
                this.setState({
                    blob: res.data,
                    openFile: index
                });
            });
    };
    onCloseModal = e => {
        console.log("onCloseModal");

    };

    render() {
        const items = this.props.list.map((item, index) => {
            return (
                <ListItem
                    key={index}
                    className="mx-5 px-5 "
                    button={this.props.button}
                    onClick={e => this.handleClickToOpen(item.locatie, e, index)}
                >

                    {this.state.openFile === index ? (
                        <Pdf
                            data={`data:application/pdf;base64,${this.state.blob}`}
                            print={this.state.blob}
                            onCloseModal={this.onCloseModal}
                            fileName={item.locatie}
                        />
                    ) : (
                            ""
                        )}

                    {this.props.icon ? (
                        <ListItemIcon className="mx-1 px-1">
                            <img src={this.props.icon} alt="Icon_Lista_De_Documente" />
                        </ListItemIcon>
                    ) : (
                            ""
                        )}
                    <ListItemText
                        color="white"
                        inset
                        primary={item.titlu}
                        secondary={item.data}
                    />
                </ListItem>
            );
        });

        return (
            <List
                component={this.props.component}
                disablePadding
                subheader={this.props.subheader}
            >
                {items}
            </List>
        );
    }
}

export default ListOfDocs;
