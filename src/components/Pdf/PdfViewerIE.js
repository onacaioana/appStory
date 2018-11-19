import React, { Component } from 'react';
import Modal from "@material-ui/core/Modal";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./pdf.css";
import ViewerBar from './ViewerBar';
import PDFJS from 'pdfjs-dist';
import axios from 'axios';
import NewWindow from 'react-new-window';

let pdf1 = null;
class PdfViewerIE extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numPages: null,
            isModalOpen: true,
            scale: 1.5,
        };

    }



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
                var pdfjsframe = document.getElementById('pdfViewer');
                pdfjsframe.onload = function () {
                    pdfjsframe.contentWindow.PDFViewerApplication.open(uint8ArrayPdf);
                };

            }
            )
    }

    /**
     * When the document is loaded save page count in state
     *
     * @param numPages - count of pages
     */
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };


    /**
      *Function for parent-child components communication
      * @param field - state property
      * @param value - state value for field property
      */
    setDataToParent = (field, value) => {
        this.setState({
            [field]: value,
        });
    };

    //closing the modal containing pdf file
    onCloseModal = () => {
        this.setState({
            openFile: false
        });
    };
    render() {
        const { numPages, isModalOpen, scale } = this.state;
        const { data, pages, handleCloseModal, fileName, base64 } = this.props;

        /*   PDFJS.getDocument(pdf1).then(function (pdf) {
              // Using promise to fetch the page
              
              pdf.getPage(1).then(function (page) {
                  var viewport = page.getViewport(scale);
      
                  //
                  // Prepare canvas using PDF page dimensions
                  //
                  var canvas = document.getElementById('canvas');
                  var context = canvas.getContext('2d');
                  canvas.height = viewport.height;
                  canvas.width = viewport.width;
      
                  //
                  // Render PDF page into canvas context
                  //
                  var renderContext = {
                      canvasContext: context,
                      viewport: viewport
                  };
                  page.render(renderContext);
              });
          }); */
        return (
            <div>
                <iframe id="pdfViewer" src="web/viewer.html" style={{ width: '100%', height: '700px' }} allowfullscreen="" webkitallowfullscreen=""></iframe>
            </div>
        );
    }
}

export default PdfViewerIE;