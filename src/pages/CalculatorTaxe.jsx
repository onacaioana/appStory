import React, { Component } from 'react';
import TextFiled from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Title from '../components/Header/HeaderTitlePage';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class TaxeTimbru extends Component {
    constructor(props) {
        super(props);
        this.onChangeSum.bind(this);
    }

    state = {
        open: false,
        scroll: 'paper',
        taxaJudiciaraFond: '0.00',
        taxaJudiciaraApel: '0.00',
        taxaAchizitiiFond: '0.00',
        taxaAchizitiiApel: '0.00',
        cautiuneFond: '0.00',
        cautiuneApel: '0.00',
        suma: '',
    };

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onChangeSum = (e) => {
        this.setState({ suma: e.target.value });
        const sum = e.target.value;

        switch (true) {
            case sum === 0: {
                this.setState({ taxaJudiciaraFond: '0.00' });
                this.setState({ taxaJudiciaraApel: '0.00' });
                break;
            }
            case sum < 500:
                if ((sum * 0.08) > 20) {
                    this.setState({ taxaJudiciaraFond: (sum * 0.08) });
                    this.setState({ taxaJudiciaraApel: sum * 0.04 });
                }
                else {
                    this.setState({ taxaJudiciaraFond: 20 });
                    this.setState({ taxaJudiciaraApel: 10 });
                }
                break;
            case sum >= 500 && sum < 5000:
                this.setState({ taxaJudiciaraFond: 40 + ((sum - 500) * 0.07) });
                this.setState({ taxaJudiciaraApel: (40 + ((sum - 500) * 0.07)) / 2 });
                break;
            case sum >= 5000 && sum <= 25000:
                this.setState({ taxaJudiciaraFond: (355 + ((sum - 5000) * 0.05)) });
                this.setState({ taxaJudiciaraApel: (355 + ((sum - 5000) * 0.05)) / 2 });
                break;
            case sum > 25000 && sum < 50000:
                this.setState({ taxaJudiciaraFond: 1355 + ((sum - 25000) * 0.03) });
                this.setState({ taxaJudiciaraApel: (1355 + ((sum - 25000) * 0.03)) / 2 });
                break;
            case sum >= 50000 && sum < 250000:
                this.setState({ taxaJudiciaraFond: 2105 + ((sum - 50000) * 0.02) });
                this.setState({ taxaJudiciaraApel: (2105 + ((sum - 50000) * 0.02)) / 2 });
                break;
            case sum >= 250000:
                this.setState({ taxaJudiciaraFond: 6105 + ((sum - 250000) * 0.01) });
                this.setState({ taxaJudiciaraApel: (6105 + ((sum - 250000) * 0.01)) / 2 });
                break;
            default: break;
        }

        this.setState({ taxaAchizitiiFond: this.state.suma / 2 });
        this.setState({ taxaAchizitiiApel: this.state.suma / 2 });
        this.setState({ cautiuneFond: this.state.suma });
        this.setState({ cautiuneApel: this.state.suma });
    }
    render() {
        return (
            <React.Fragment>

                <Title
                    title="Informaţii Utile / Calculator "
                    page="Calculator taxe "
                    breadcrumbs={true}
                    subpage="Calculator taxe"
                />
                <div className="container py-5" >
                    <Grid container className="bg-light" justify="center" spacing={16} >
                        {/* Title */}
                        <Grid item align="center" xs={12} md={12} className=" rounded bg-secondary text-light" >
                            <h3>Calculator informativ taxe</h3>
                        </Grid>

                        {/* First line */}
                        <Grid item xs={4} >
                            <p>Suma:</p>
                        </Grid>
                        <Grid item xs={8}>
                            <TextFiled
                                value={this.state.suma}
                                onChange={this.onChangeSum}
                                error
                                fullWidth
                                label="Introduceţi suma"
                                placeholder="Suma"
                                variant="outlined"
                                color="dark"
                                inputProps={{ style: { background: 'white' } }}
                            />
                        </Grid>
                        {/* Second line*/}
                        <Grid item xs={4}>

                        </Grid>
                        <Grid item xs={4}>
                            <p>Fond</p>
                        </Grid>
                        <Grid item xs={4}>
                            <p>Apel</p>
                        </Grid>

                        {/* 3th line */}
                        <Grid item xs={4}>
                            <p>Taxa judiciară de timbru</p>
                        </Grid>
                        <Grid item xs={4}>
                            <TextFiled
                                disabled
                                value={this.state.taxaJudiciaraFond}
                                placeholder="0.00"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextFiled
                                disabled
                                value={this.state.taxaJudiciaraApel}
                                placeholder="0.00"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>


                        {/* 4th line */}
                        <Grid item xs={4}>
                            <p>Taxa de timbru achiziţii</p>
                        </Grid>
                        <Grid item xs={4}>
                            <TextFiled
                                disabled
                                value={this.state.taxaAchizitiiFond}
                                placeholder="0.00"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextFiled
                                disabled
                                value={this.state.taxaAchizitiiApel}
                                placeholder="0.00"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        {/* 5th line */}
                        <Grid item xs={4} >
                            <p>Cauţiune</p>
                        </Grid>
                        <Grid item xs={4} >
                            <TextFiled
                                disabled
                                value={this.state.cautiuneFond}
                                placeholder="0.00"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextFiled
                                disabled
                                value={this.state.cautiuneApel}
                                placeholder="0.00"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </div>

                <div>
        <Button onClick={this.handleClickOpen('paper')}>Temei legal
        
        </Button>
        <Button onClick={this.handleClickOpen('paper')}>Modalitate şi loc de plată</Button>
        <Button onClick={this.handleClickOpen('paper')}>Alte informaţii</Button>
       
      </div>
            </React.Fragment>
        );
    }
}

export default TaxeTimbru;