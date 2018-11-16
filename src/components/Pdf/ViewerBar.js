import React, { Component } from 'react';
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./pdf.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/SaveAlt";
import CloseIcon from "@material-ui/icons/Close";
import ZoomInIcon from '@material-ui/icons/ZoomInOutlined';
import ZoomOutIcon from '@material-ui/icons/ZoomOutOutlined';
import Tooltip from '@material-ui/core/Tooltip';

const actionsSeparator = '|';

/**
 * Actions for a document: zoom+-, download, print, close
 */
class ViewerBar extends Component {

    /**
     * File download action
     */
    fileDownload = () => {
        const { data, fileName } = this.props;
        const downloadLink = document.createElement("a");
        downloadLink.href = data;
        downloadLink.download = fileName;
        downloadLink.click();
    };

    /**
     * Zoom in event listener (zoom with 25%)
     *
     * @param event
     */
    zoomIn = (event) => {
        event.preventDefault();
        const { scale } = this.props;
        this.props.setDataToParent('scale', scale + 0.25);
    };

    /**
     * Zoom out event listener (zoom out with 25%)
     *
     * @param event
     */
    zoomOut = (event) => {
        event.preventDefault();
        const { scale } = this.props;
        this.props.setDataToParent('scale', scale - 0.25);
    };


    render() {
        const { data, closeFile, scale, fileName } = this.props;

        return (
            <AppBar id="appBarPdf" className="bg-dark text-light" >
                <Toolbar >
                    <div className="mr-auto d-none d-lg-block d-xl-block">
                        {`${fileName}`}
                    </div>
                    <div className=" ml-auto">

                        {/*Zoom out action*/}
                        <Tooltip title="Zoom Out">
                            <IconButton
                                style={{ outline: '0' }}
                                onClick={this.zoomOut}
                                color="inherit"
                            >
                                <ZoomOutIcon />
                            </IconButton>
                        </Tooltip>

                        {/*Zoom scale*/}

                        {` ${(scale - 0.5) * 100}% `}

                        {/*Zoom in action*/}
                        <Tooltip title="Zoom In">
                            <IconButton
                                style={{ outline: '0' }}
                                onClick={this.zoomIn}
                                color="inherit"
                            >
                                <ZoomInIcon />
                            </IconButton>
                        </Tooltip>

                        {/*Separator*/}
                        {actionsSeparator}

                        {/* Download icon*/}
                        <Tooltip title="Download">
                            <IconButton
                                style={{ outline: '0' }}
                                href={data}
                                onClick={this.fileDownload}
                                color="inherit"
                            >
                                <SaveIcon />
                            </IconButton>
                        </Tooltip>

                        {/* Close icon and action */}
                        <Tooltip title="Close">
                            <IconButton
                                style={{ outline: '0' }}
                                onClick={closeFile}
                                color="inherit"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Toolbar>
            </AppBar >
        );
    }
}

export default ViewerBar;