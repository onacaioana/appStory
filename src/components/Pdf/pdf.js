import React, { Component } from "react";
import { Document, Page, setOptions } from "react-pdf/dist/entry.webpack";
import Modal from "@material-ui/core/Modal";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./pdf.css";
import ViewerBar from './ViewerBar';

/**
* Loading component
*

const Loading = () => {
  return (
      <div style={styles.loading}>
          <CircularProgress size={80} thickness={7}/>
      </div>
  );
};*/


class Pdf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numPages: null,
      isModalOpen: true,
      scale: 1.5,
    };

  }

  componentDidMount() {
    // add setActivePage for scroll event (after scrolls detect the active page)
    // document.getElementById('container__document').addEventListener('scroll', this.setActivePage);
    setOptions({
      cMapUrl: 'cmaps/',
      cMapPacked: true,
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
  render() {
    const { numPages, isModalOpen, scale } = this.state;
    const { data, pages, handleCloseModal,fileName } = this.props;

    return (
      /**
       * Open pdf file in Modal 
       */
      <Modal
        open={isModalOpen}
        style={{ overflowY: "scroll", textAlign: "center" }}
        onClose={handleCloseModal}
      >

        <div className="container__document">

          {/* AppBar for all PDF actions: donwload, print, zoom  */}
          <ViewerBar
            data={data}
            fileName={fileName}
            closeFile={handleCloseModal}
            setDataToParent={this.setDataToParent}
            numPages={numPages}
            scale={scale}
          />

          {/* Open pdf file using react-pdf library */}
          <Document
            file={data}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            {/* Show first 'this.props.pages' pages or all pages */}
            {Array.from(
              new Array(pages || numPages),
              (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={scale}
                />
              )
            )}
          </Document>
        </div>
      </Modal >
    );
  }
}

export default Pdf;
