import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const tileData = [{
    img: require('../images/jud_dej.jpg'),
    title: 'Judecatoria Dej',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/219/SitePages/acasa_default.aspx?id_inst=219",
},

{
    img: require('../images/jud-cluj.jpg'),
    title: 'Judecatoria Cluj',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/211/SitePages/acasa_default.aspx?id_inst=211"
},
{
    img: require('../images/jud-gherla.jpg'),
    title: 'Judecatoria Gherla',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/235/SitePages/acasa_default.aspx?id_inst=235"
},
{
    img: require('../images/jud-huedin.jpg'),
    title: 'Judecatoria Huedin',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/242/SitePages/acasa_default.aspx?id_inst=242"
},
{
    img: require('../images/jud-turda.jpg'),
    title: 'Judecatoria Turda',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/328/SitePages/acasa_default.aspx?id_inst=328"
}];
class InfoUtile extends Component {
    constructor(props) {
        super(props);


    }


    goto = () => {
        window.location = '/prezentare';
    }

    onMouseOver = () => this.setState({ color: 'bg-secondary' });

    onMouseOut = () => this.setState({ color: 'bg-light' });


    routeChange = () => {
        window.location = '/taxe';
    }

    render() {
        return (
            <div>
      <GridList cellHeight={120} >
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>



        );
    }
}

export default InfoUtile;