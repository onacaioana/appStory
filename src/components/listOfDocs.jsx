import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import Pdf from './Pdf/pdf';
import axios from 'axios';

class ListOfDocs extends Component {
<<<<<<< HEAD
    constructor(props){
        super(props);
    };
    state={
        blob:[],
        openFile:12
    };
    /* Const ITEMS create each ListItem from ListOfDocs */
    handleClick = (fileName,e,index) => {
        console.log(e);
        axios.get(`/ass`,{ params: {
            fileName: fileName
          }})
            .then(res => {
                this.setState({
                    blob: res.data
                });
                this.setState({openFile:index})
            })
    }

    render() {
        const items = this.props.list.map((item, index) => {
            console.log(item,index);
            return (
                <ListItem key={index} className="mx-5 px-5 " button={this.props.button} onClick={(e) => this.handleClick(item.locatie,e,index)}  >
                    {this.state.openFile == index ?  <Pdf data={`data:application/pdf;base64,${this.state.blob}`} print={this.state.blob} fileName={item.locatie}></Pdf> : ""}
                    {this.props.icon
                        ? <ListItemIcon className="mx-1 px-1">
                            <img src={this.props.icon} alt="Icon_Lista_De_Documente"></img>
                        </ListItemIcon>
                        : ""}
                    <ListItemText color="white" inset primary={item.titlu} secondary={item.data} />
                </ListItem>

            )
        });
        return (
            <List component={this.props.component} disablePadding subheader={this.props.subheader}>
                {items}
=======
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    handleClick = (data) => {
        console.log('I will open a link', data);
    }

    componentDidMount() {
        const items = this.props.list.map((item, index) => {
            return (
                <ListItem key={index}
                    className="mx-5 px-5 "
                    button={this.props.button}
                    onClick={() => this.handleClick(item.locatie)}
                >
                    {
                        this.props.icon
                            ? <ListItemIcon className="mx-1 px-1"

                            >
                                <img src={this.props.icon}
                                    alt="Icon_Lista_De_Documente">
                                </img>
                            </ListItemIcon>
                            : ""
                    }
                    <ListItemText color="white" inset primary={item.titlu}
                        secondary={item.data}
                    />
                </ListItem>
            )
        });
        this.setState({ items: items });
    }

    render() {

        return (
            <List component={this.props.component} disablePadding subheader={this.props.subheader} >
                {this.state.items}
>>>>>>> pr/3
            </List>
        )
    }
}

export default ListOfDocs;