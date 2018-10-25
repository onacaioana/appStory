import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import WhenInView from './whenInView';

const instanta = [{
    src: require('../images/jud_dej.jpg'),
    title: 'Judecatoria Dej',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/219/SitePages/acasa_default.aspx?id_inst=219",
},
{
    title: 'Instanţele din circumscripţia Tribunalului Cluj',
    content: ' După reorganizarea administrativ-teritorială din 1968 potrivit Legii nr. 58 din 26 decembrie 1968, Tribunalul Regional Cluj este desfiinţat şi înlocuit cu Tribunalul Judeţean Cluj. Prin Legea nr. 92/04.08.1992 pentru organizare judecătorească, se înfiinţează la Cluj, Curtea de Apel Cluj, care are în circumscripţie: Tribunalul Cluj, Tribunalul Bistriţa Năsăud, Tribunalul Maramureş şi Tribunalul Sălaj. Prin aceeaşi lege Tribunalul Cluj are în circumscripţie Judecătoria Cluj-Napoca, Judecătoria Dej, Judecătoria Gherla, Judecătoria Turda şi Judecătoria Huedin. ',
    content1: 'Prin aceeaşi lege Tribunalul Cluj are în circumscripţie Judecătoria Cluj-Napoca, Judecătoria Dej, Judecătoria Gherla, Judecătoria Turda şi Judecătoria Huedin. ',
},
{
    src: require('../images/jud-cluj.jpg'),
    title: 'Judecatoria Cluj',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/211/SitePages/acasa_default.aspx?id_inst=211"
},
{
    src: require('../images/jud-gherla.jpg'),
    title: 'Judecatoria Gherla',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/235/SitePages/acasa_default.aspx?id_inst=235"
},
{
    src: require('../images/jud-huedin.jpg'),
    title: 'Judecatoria Huedin',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/242/SitePages/acasa_default.aspx?id_inst=242"
},
{
    src: require('../images/jud-turda.jpg'),
    title: 'Judecatoria Turda',
    content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească.Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej.',
    link: "http://portal.just.ro/328/SitePages/acasa_default.aspx?id_inst=328"
}];

class CardInstanta extends React.Component {

    render() {
        const cards = instanta.map((item, index) => {
            return (
                <Grid item md={4} key={index}>
                    <Card>
                        <CardActionArea>
                            {index !== 1 ? <CardMedia
                                style={{ height: 0, paddingTop: '56.25%' }}
                                image={item.src}
                                title={item.title} />
                                : <p></p>}

                            <WhenInView>
                                {({ inView }) =>
                                    <Collapse  in={inView}
                                      
                                        {...(inView ? { timeout: 2000 } : {})}>
                                        <CardContent>
                                            <Typography align='center' gutterBottom variant="headline">
                                                {item.title}
                                            </Typography>
                                            <Typography component="p">
                                                &nbsp;&nbsp;
                                            {index === 1 ? item.content + item.content1 : item.content}

                                            </Typography>
                                        </CardContent>
                                    </Collapse >}
                            </WhenInView>
                        </CardActionArea>

                        {index !== 1 ? <CardActions>
                            <Button href={item.link} size="small" color="primary">
                                Află mai multe
                                            </Button>
                        </CardActions> : <p></p>}
                    </Card>
                </Grid >
            )
        });
        return (
            <Grid container={true} spacing={24} className="py-4" justify="center" >
                {cards}
            </Grid>
        );
    }
}

export default CardInstanta;