import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

/* A function that make list items fron a list of strings
 Input: a list ["","","",""] and return a LIST of multiple <ListItem> tags*/
const ListFromStringsArray = (props) => {
    let resultList = [];
    for (let i = 0; i < props.list.length; i++) {
        resultList.push(
            <ListItem key={i} className="mx-5 px-5" button={props.button} component={props.component} >
               {props.icon ? <img src={props.icon} alt="IconPentruLista"></img> : "" } 
                <ListItemText color="white" inset primary={props.list[i]} />
            </ListItem>
        );
    }
    return (
        <List component="div" disablePadding>
            {resultList}
        </List>
    )
}
export default ListFromStringsArray;

/* {require("../images/icons/arow2.png")} */