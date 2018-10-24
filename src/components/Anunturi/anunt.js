import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./anunt.css";
import FileIcon, { defaultStyles } from "react-file-icon";

class Anunt extends Component {
  render() {
    return (
      <div className="anunt">
        <Grid container spacing={16} justify="flex-end">
          <Grid item xs={2} style={{ textAlign: "right" }}>
            <FileIcon extension="pdf" {...defaultStyles.pdf} size={40} />
          </Grid>
          <Grid item xs={10} sm={8}>
            <div className="inline">
              <div className="inline">
                <p>
                  Anunt fdqg gfd gfd gfdgfsdfdsa grfdsgfd ggdfs gfdsgdf fwewqf
                  few fewqfwqe fweqew fewqf fewq fwqe fwq fewq qewf few qew
                  fqwfe rewqrwrw rewqrewrq rewq rewr reqw rew qwer rew rewq qewr
                  r rew q qewrr ew r rewqrewq erwfdeqwfc cwqecewqefcw
                  cewqcewqceqwcewq cewcewqew cewqcewq cewqceqw ewcw q
                </p>
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={2}
            style={{ textAlign: "center", backgroundColor: "red" }}
          >
            Deschide
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Anunt;
