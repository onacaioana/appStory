import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {prezentareInstante} from '../utils/constants';

class CardInstanta extends React.Component {

    render() {
        const cards = prezentareInstante.map((instanta, index) => {
            return (
                <Grid item md={4} key={index}>
                    <Card >
                        <CardActionArea>
                            {index !== 1 ? <CardMedia
                                style={{ height: 0, paddingTop: '56.25%' }}
                                image={instanta.src}
                                title={instanta.title} />
                                : <p></p>}
                            <CardContent>
                            <h4 className=" text-center" style={{ color: '#39b3ff' }}>{instanta.title}</h4>
                                    
                               
                                <p>
                                    &nbsp;&nbsp;
                                            {instanta.content}

                                </p>
                            </CardContent>
                        </CardActionArea>

                        {index !== 1 ? <CardActions>
                            <Button href={instanta.link} size="small" color="primary">
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