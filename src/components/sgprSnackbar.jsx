import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import "../css/index.css";
class PositionedSnackbar extends React.Component {
  state = {
    open: true,
    vertical: 'bottom',
    horizontal: 'right',
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { vertical, horizontal, open } = this.state;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Acest site folosește cookie-uri. Navigând în continuare vă exprimați acordul pentru folosirea cookie-urilor conform Regulamentului (UE) 2016/679 
          <a href=""> Vezi detalii.</a></span>
          }
          action={[
            <Button key="ok" color="secondary" size="medium" onClick={this.handleClose}>
              Am înţeles.
            </Button>
    
          ]}
        />
      </div>
    );
  }
}

export default PositionedSnackbar;