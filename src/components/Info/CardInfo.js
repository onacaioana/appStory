import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import Pdf from '../Pdf/pdf';
import { Icon } from "react-icons-kit";
import PdfViewerIE from '../Pdf/PdfViewerIE';

class CardInfo extends Component {
    state = {
        openFile: false,
        blob: []
    }

    //closing the modal containing pdf file
    onCloseModal = () => {
        this.setState({
            openFile: false,
            blob: []
        });
    };


    handlerInfo = (fileName, index) => {
        window.open(PdfViewerIE, '_blank');
    }

    render() {
        const { blob, openFile } = this.state;
        const { locatie, index, icon, title } = this.props;

        return (
            <div className="single-list-topics-content rounded shadow">
                <Button
                    key={index}
                    onClick={() => this.handlerInfo(locatie, index)}
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
        );
    }
}

export default CardInfo;