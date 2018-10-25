import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./anunt.css";
// import FileIcon, { defaultStyles } from "react-file-icon";

class Anunt extends Component {
  render() {
    return (
      <div className="anunt">
        <Grid container>
          <Grid item xs={12} sm={9}>
            <div className="docIcon inline">icon</div>
            <div className="textContent inline">
              <p>Cereroferta rechizite - Tribunalul Cluj</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} style={{ textAlign: "center", border: "1px solid red" }} >
            <button>Deschide</button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Anunt;
