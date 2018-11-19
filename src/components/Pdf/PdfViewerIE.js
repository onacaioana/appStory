import React, { Component } from 'react';
import Modal from "@material-ui/core/Modal";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./pdf.css";
import ViewerBar from './ViewerBar';
import PDFJS from 'pdfjs-dist';
import axios from 'axios';

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



    componentDidMount(){
        axios
            .get(`http://localhost:8080/ass`, {
                params: {
                    fileName: "InfoUtile/1.pdf"
                }
            })
            .then(res => {

                let pdfData = atob(res.data);
                let uint8ArrayPdf = new Uint8Array(pdfData.length)
                for (let i = 0; i < pdfData.length; i++) {
                    uint8ArrayPdf[i] = pdfData.charCodeAt(i)
                }
                pdf1 = uint8ArrayPdf;
            })
            .catch(e => {
                console.log("Eroare la deschiderea fișierului", e);
            });
    }
    componentDidUpdate(prevProps, prevState){
        console.log('prevState',prevState);
        PDFJS.getDocument(pdf1).then(function (pdf) {
            // Using promise to fetch the page
            pdf.getPage(1).then(function (page) {
                var viewport = page.getViewport(prevState.scale);
    
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
        });
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

        return (
            /**
             * Open pdf file in Modal 
             */
            <Modal
                open={isModalOpen}
                style={{ overflowY: "scroll", textAlign: "center" }}
                onClose={this.onCloseModal}
            >

                <div className="container__document">

                    {/* AppBar for all PDF actions: donwload, print, zoom  */}
                    <ViewerBar
                        data={data}
                        fileName={fileName}
                        closeFile={this.onCloseModal}
                        setDataToParent={this.setDataToParent}
                        numPages={numPages}
                        scale={scale}
                    />
                    {/* Open pdf file using react-pdf library */}
                    <canvas id="canvas"></canvas>
                </div>
            </Modal>
        );
    }
}

export default PdfViewerIE;