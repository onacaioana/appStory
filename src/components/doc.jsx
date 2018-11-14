import React, { Component } from "react";
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

    render() {
        return (
            <div>
                {
                    this.state.openFile ?
                        (<Pdf
                            data={`data:application/pdf;base64,${this.state.blob}`}
                            print={this.state.blob}
                            onCloseModal={this.onCloseModal}
                            fileName={this.props.locatie}
                            onClick={() => this.handleClickToOpen(this.props.locatie)}
                        />) :
                        ("")
                }
            </div>
        )
    }
}

export default Doc;