import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Pdf from "./Pdf/pdf";
import axios from "axios";

class Doc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blob: [],
            openFile: false
        }
    }

    handleClickToOpen = () => {
        // console.log(fileName);
        axios
            .get(`http://localhost:8080/ass`, {
                params: {
                    fileName: this.props.locatie
                }
            })
            .then(res => {
                console.log('aduc documentul');
                this.setState({
                    blob: res.data,
                    openFile: true
                });
            })
            .catch(e => {
                console.log('error opening file', e)
            });
    };
    onCloseModal = () => {
        console.log("onCloseModal");
        this.setState({ openFile: false });
        console.log('vasileeee', this.state.openFile);
    };


    render() {
        return (
            <div>
                <ListItem
                    className="mx-5 px-5 "
                    button={this.props.button}
                    onClick={this.handleClickToOpen}
                >

                    {this.state.openFile ? (
                        <Pdf
                            data={`data:application/pdf;base64,${this.state.blob}`}
                            print={this.state.blob}
                            onCloseModal={this.onCloseModal}
                            fileName={this.props.locatie}
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
                        primary={this.props.titlu}
                        secondary={this.props.data}
                    />
                </ListItem>
            </div>
        )
    }
}

export default Doc;