import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';

const ListOfDocs = (props) => {
    /* Const ITEMS create each ListItem from ListOfDocs */
    const items = props.list.map((item, index) => {
        return (
            <ListItem key={index} className="mx-5 px-5 " button={props.button} href={item.locatie} >
                {props.icon
                    ? <ListItemIcon className="mx-1 px-1">
                        <img src={props.icon} alt="Icon_Lista_De_Documente"></img>
                    </ListItemIcon>
                    : ""}
                <ListItemText color="white" inset primary={item.titlu} secondary={item.data} />
            </ListItem>

        )
    });
    return (
        <List component={props.component} disablePadding subheader={props.subheader}>
            {items}
        </List>
    )
}
export default ListOfDocs;