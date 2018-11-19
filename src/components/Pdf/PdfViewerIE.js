import React, { Component } from 'react';
import Modal from "@material-ui/core/Modal";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./pdf.css";
import ViewerBar from './ViewerBar';
import PDFJS from 'pdfjs-dist';
import axios from 'axios';

let pdf1 = null;
class PdfViewerIE extends Component {

    componentDidMount() {
        axios
            .get(`http://localhost:8080/ass`, {
                params: {
                    fileName: "Bilant/Bilant2017.pdf"
                }
            })
            .then(res => {
                let pdfData = atob(res.data);
                let uint8ArrayPdf = new Uint8Array(pdfData.length)
                for (let i = 0; i < pdfData.length; i++) {
                    uint8ArrayPdf[i] = pdfData.charCodeAt(i)
                }

                var url = 'pdfViewer/web/viewer.html?file=';

                var binaryData = [];
                binaryData.push(uint8ArrayPdf);
                var dataPdf = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));

            window.open(url + encodeURIComponent(dataPdf),'_blank');
               // document.getElementById('the-a').setAttribute('href', url + encodeURIComponent(dataPdf));

            })
            .catch(e => {
                console.log("Eroare la deschiderea fișierului", e);
            });
    }
    
    render() {
        
        return (
            < div >
            </div >
        );
    }
}

export default PdfViewerIE;