import React, { Component } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShareIcon from '@material-ui/icons/Share';
import PeopleIcon from '@material-ui/icons/People';
import { HashLink as Link } from 'react-router-hash-link';

class MeniuOrganizare extends Component {

    render() {
        return (
            <MenuList className="position-fixed "  >
                <Link to="/organizare#idOrganigrama" style={{ textDecoration: 'none', display: 'block' }}>
                    <MenuItem style={{ backgroundColor: 'transparent' }}>
                        <ListItemIcon>
                            <ShareIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Organigramă" />
                    </MenuItem>
                </Link>
                <Link to="/organizare#idOrganizare" style={{ textDecoration: 'none', display: 'block' }}>
                    <MenuItem style={{ backgroundColor: 'transparent' }}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Organizarea" />
                    </MenuItem>
                </Link>
            </MenuList>
        );
    }
}

export default MeniuOrganizare;