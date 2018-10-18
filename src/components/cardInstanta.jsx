import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const instanta = [{
    src: require('../images/jud_dej.jpg'),
    title: 'Judecatoria Dej',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/219/SitePages/acasa_default.aspx?id_inst=219",
},
{
    src: require('../images/jud_dej.jpg'),
    title: 'Judecatoria Dej',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/219/SitePages/acasa_default.aspx?id_inst=219"
},
{
    src: require('../images/jud_dej.jpg'),
    title: 'Judecatoria Dej',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/219/SitePages/acasa_default.aspx?id_inst=219"
},
{
    src: require('../images/jud_dej.jpg'),
    title: 'Judecatoria Dej',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/219/SitePages/acasa_default.aspx?id_inst=219"
},
{
    src: require('../images/jud_dej.jpg'),
    title: 'Judecatoria Dej',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/219/SitePages/acasa_default.aspx?id_inst=219"
},
{
    src: require('../images/jud_dej.jpg'),
    title: 'Judecatoria Dej',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/219/SitePages/acasa_default.aspx?id_inst=219"
}
];

class CardInstanta extends React.Component {
    render() {
        const cards = instanta.map((item) => {
            return(
            <Grid item md={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            style={{ height: 0, paddingTop: '56.25%' }}
                            image={item.src}
                            title={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline">
                                {item.title}
                            </Typography>
                            <Typography component="p">
                                {item.content}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button href={item.link} size="small" color="primary">
                            Află mai multe
                    </Button>
                    </CardActions>
                </Card>
            </Grid>
            )
        });
        return (
                <Grid container={true} spacing={24} className="py-4" justify="center">
                    {cards}
                </Grid>
        );
    }
}

export default CardInstanta;