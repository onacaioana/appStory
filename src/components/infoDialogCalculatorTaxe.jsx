import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class infoDialogCalculatorTaxe extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        open: false,
        scroll: 'paper',
    };

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
        <div>
            <p>Ioana</p>
        </div>
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        scroll={this.state.scroll}
                        aria-labelledby="scroll-dialog-title"
                    >
                        <DialogTitle id="scroll-dialog-title">Temei Legel</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum
                                nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras
                                mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                                sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                                consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                                sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                                consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                                sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                                consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                                sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                                consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                                sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                OK
            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </React.Fragment>
        );
    }
}

export default infoDialogCalculatorTaxe;