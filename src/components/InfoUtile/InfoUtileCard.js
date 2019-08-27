import React, { Component } from 'react';
import axios from 'axios';/* 
import { Button } from 'reactstrap'; */
import Button from '@material-ui/core/Button';
import Pdf from '../Pdf/pdf';
import { withRouter } from 'react-router-dom';

class CardInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blob: [],
            openFile: false,
        };
    }

    /* Closing the modal containing pdf file */
    onCloseModal = () => {
        this.setState({
            openFile: false,
            blob: []
        });
    };

    routeChange = () => {
        let path = this.props.locatie;
        this.props.history.push(path);
    }

    handleClickToOpen = () => {
        const { locatie, index, browserName, browserVersion } = this.props;
        if (index === 0 || index === 1 || index ===2 || index === 7) {
            this.routeChange();
        } else if (locatie.substring(0, 4) === "http") {
            window.open(locatie)
        }
        else {
            axios
                .get(`/ass`, {
                    params: {
                        fileName: locatie
                    }
                })
                .then(res => {
                    /* Check if browser in Internet Explorer*/
                    if (browserName === "ie" && browserVersion.indexOf('9') !== -1) {
                        //var binaryData = [];
                        //   var url = 'pdfViewer/web/viewer.html?file=';

                        /* Convert Base 64 to Blob */
                        //     let pdfData = atob(res.data);
                        //    let uint8ArrayPdf = new Uint8Array(pdfData.length)
                        //    for (let i = 0; i < pdfData.length; i++) {
                        //        uint8ArrayPdf[i] = pdfData.charCodeAt(i)
                        //    }

                        /* Open PDF file using PDF.js library*/
                        //    binaryData.push(uint8ArrayPdf);
                        //   var dataPdf = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
                        //   window.open(url + encodeURIComponent(dataPdf), '_blank');
                    }
                    else this.setState({
                        blob: res.data,
                        openFile: true
                    })
                })
                .catch(e => {
                    console.log("Eroare la deschiderea fișierului", e);
                });

        }

    }

    render() {
        const { blob} = this.state;
        const { locatie, index, icon, title } = this.props;

        return (
            <React.Fragment>
                <Button
                    key={index}
                    onClick={() => this.handleClickToOpen()}
                    style={{ outline: 'none', backgroundColor: 'transparent', border: '0px', borderColor: 'transparent', color: '#122034', fontWeight: 'bold' }}
                >
                    <div className="single-list-topics-content rounded shadow">

                        {/* Icon comes from utils/constants.js file
                          * using props
                          * Titlu - text shown on infoUtile's card
                          * and open document for each of them 
                          */}
                        <div className="single-list-topics-icon">
                            <img style={{ color: '#122034' }} className="mb-2" src={icon} alt="Icon_Document" />
                        </div>

                        {title}
                    </div>
                </Button>
                {this.state.openFile
                    ? <Pdf
                        data={`data:application/pdf;base64,${blob}`}
                        print={blob}
                        handleCloseModal={this.onCloseModal}
                        fileName={locatie}
                    />

                    : ""
                }
            </React.Fragment>
        );
    }
}

export default withRouter(CardInfo);