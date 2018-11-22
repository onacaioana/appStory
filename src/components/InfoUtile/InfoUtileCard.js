import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import Pdf from '../Pdf/pdf';
import { Icon } from "react-icons-kit";
import WhenInView from '../../utils/whenInView';
import Grow from '@material-ui/core/Grow';
import { withRouter } from 'react-router-dom';

class CardInfo extends Component {
    state = {
        openFile: false,
        blob: []
    }

    /* Closing the modal containing pdf file */
    onCloseModal = () => {
        this.setState({
            openFile: false,
            blob: []
        });
    };

    routeChange =() => {
        let path = this.props.locatie;
        this.props.history.push(path);
    }
    openPdf = () => {
        const { locatie, index, browserName, browserVersion } = this.props;
        if (index === 0 || index === 2) {
            this.routeChange();
        }else{
            axios
                .get(`http://localhost:8080/ass`, {
                    params: {
                        fileName: locatie
                    }
                })
                .then(res => {
                    /* Check if browser in Internet Explorer*/
                    if (browserName === "ie" && browserVersion.indexOf('11') !== -1) {
                       
                        var binaryData = [];
                        var url = 'pdfViewer/web/viewer.html?file=';
                       
                        /* Convert Base 64 to Blob */
                        let pdfData = atob(res.data);
                        let uint8ArrayPdf = new Uint8Array(pdfData.length)
                        for (let i = 0; i < pdfData.length; i++) {
                            uint8ArrayPdf[i] = pdfData.charCodeAt(i)
                        }

                        /* Open PDF file using PDF.js library*/
                        binaryData.push(uint8ArrayPdf);
                        var dataPdf = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
                        window.open(url + encodeURIComponent(dataPdf), '_blank');
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
        const { blob, openFile } = this.state;
        const { locatie, index, icon, title } = this.props;

        return (
            <React.Fragment>
                {/* WhenInView - used to make a transition when compoment will be in view */}
                <WhenInView>
                    {({ inView }) =>

                        /* Create a grow transition of component "cardInfo" */
                        <Grow
                            in={inView}
                            style={{ transformOrigin: '50% 50% 0' }}
                            {...(inView ? { timeout: (2000 + index * 100) } : {})}
                        >
                            <div className="single-list-topics-content rounded shadow">

                                <Button
                                    key={index}
                                    onClick={() => this.openPdf()}
                                    style={{ outline: '0', backgroundColor: 'transparent', borderColor: 'transparent', color: '#8c7b75' }}
                                >

                                    <div className="single-list-topics-icon">
                                        <Icon style={{ color: '#8c7b75' }} size={40} icon={icon} />
                                    </div>

                                    {title}
                                </Button>

                                {openFile
                                    ? <Pdf
                                        data={`data:application/pdf;base64,${blob}`}
                                        print={blob}
                                        handleCloseModal={this.onCloseModal}
                                        fileName={locatie}
                                    />

                                    : ""
                                }
                            </div>

                        </Grow>
                    }</WhenInView>
            </React.Fragment>
        );
    }
}

export default withRouter(CardInfo);