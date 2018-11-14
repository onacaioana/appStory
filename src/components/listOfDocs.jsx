import React, { Component } from "react";
import List from "@material-ui/core/List";
import Doc from "./doc";

class ListOfDocs extends Component {
  render() {
    return (
      <List
        component={this.props.component}
        disablePadding
        subheader={this.props.subheader}
      >
        {this.props.list.map((item, index) => {
          console.log(item);
          return (
            <Doc
              key={index}
              titlu={item.titlu}
              data={item.data}
              icon={this.props.icon}
              locatie={item.locatie}
              button={this.props.button}
            />
          );
        })}
      </List>
    );
  }
}

export default ListOfDocs;
