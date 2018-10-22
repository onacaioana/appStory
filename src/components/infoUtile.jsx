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

                <div className="row">
                    <div className="col" align="center">
                        <img className="rounded-circle bg-light" style={{ width: '50%' }} src={require("../images/hierarchy.png")}></img>
                        <h5>Calculator Taxe</h5>
                    </div>
                    <div className="col" align="center">
                        <img className="rounded-circle bg-light" style={{ width: '50%' }} src={require("../images/hierarchy.png")}></img>
                        <h5>Calculator Taxe</h5>
                    </div>
                    <div className="col" align="center">
                        <img className="rounded-circle bg-light" style={{ width: '50%' }} src={require("../images/hierarchy.png")}></img>
                        <h5>Calculator Taxe</h5>
                    </div>
                    <div className="col" align="center">
                        <img className="rounded-circle bg-light" style={{ width: '50%' }} src={require("../images/hierarchy.png")}></img>
                        <h5>Calculator Taxe</h5>
                    </div>
                    <div className="col" align="center">
                        <img className="rounded-circle bg-light" style={{ width: '50%' }} src={require("../images/hierarchy.png")}></img>
                        <h5>Calculator Taxe</h5>
                    </div>

                </div>
                <div className="row">
                    <div className="col" align="center" style={{cursor:'pointer'}} onClick={this.routeChange}>
                        <img className="rounded-circle shadow-3 bg-secondary m-2" style={{ width: '50%',opacity:'50%' }} src={require("../images/hierarchy.png")}></img>
                        <h5>Calculator Taxe</h5>
                    </div>
                    <div className="col" align="center">
                        <img className="rounded-circle bg-dark" style={{ width: '50%' }} src={require("../images/hierarchy.png")}></img>
                        <h5 >Calculator Taxe</h5>
                    </div>
                    <div className="col" align="center">
                        <img className="rounded-circle bg-light" style={{ width: '50%' }} src={require("../images/hierarchy.png")}></img>
                        <h5>Calculator Taxe</h5>
                    </div>
                    <div className="col" align="center">
                        <img className="rounded-circle bg-light" style={{ width: '50%' }} src={require("../images/hierarchy.png")}></img>
                        <h5>Calculator Taxe</h5>
                    </div>
                    <div className="col" align="center">
                        <img className="rounded-circle bg-light" style={{ width: '50%' }} src={require("../images/hierarchy.png")}></img>
                        <h5>Calculator Taxe</h5>
                    </div>
                </div>
            </div>




        );
    }
}

export default InfoUtile;