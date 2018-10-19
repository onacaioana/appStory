import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import CardInstanta from './cardInstanta';

const styles =
{

    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop: '30'
    }
};



class Prezentare extends Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
        
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const sideList = (
            <div>
                <List>
                    <ListItem>Ioana Murariu MarianaMariana</ListItem>
                    <ListItem>Roger Murariu</ListItem>
                    <ListItem>Ioana Murariu</ListItem>
                    <ListItem>Roger Murariu</ListItem>
                    <ListItem>Ioana Murariu</ListItem>
                    <ListItem>Roger Murariu</ListItem>
                    <ListItem>Ioana Murariu</ListItem>
                    <ListItem>Roger Murariu</ListItem>
                    <ListItem>Ioana Murariu</ListItem>
                    <ListItem>Roger Murariu</ListItem>
                    <ListItem>Ioana Murariu</ListItem>
                    <ListItem>Roger Murariu</ListItem>
                    <ListItem>Ioana Murariu</ListItem>
                    <ListItem>Roger Murariu</ListItem>
                    <ListItem>Ioana Murariu</ListItem>
                    <ListItem>Roger Murariu</ListItem>
                    <ListItem>Ioana Murariu</ListItem>
                    <ListItem>Roger Murariu</ListItem>
                    <ListItem>Ioana Murariu</ListItem>
                    <ListItem>Roger Murariu</ListItem>
                    <ListItem>Ioana Murariu</ListItem>
                    <ListItem>Roger Murariu</ListItem>
                    <ListItem>Ioana Murariu</ListItem>
                    <ListItem>Roger Murariu</ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>Ioana</ListItem>
                    <ListItem>Ioana</ListItem>
                </List>
            </div>
        );
        
        return (
            <div className="container" >
                <Typography variant="display1" className="pt-2 " color="primary">Prezentare</Typography>
                <Divider />
                <p><br /> &emsp;&emsp;
                Tribunalul Cluj îşi desfăşoară activitatea în baza Legii nr. 304/2005, privind organizarea judecătorească.
                Tribunalului Cluj are sediul în Cluj-Napoca, str. Dorobanţilor, nr. 2-4, în clădirea Palatului de Justiţie Cluj, în aceeaşi locaţie în care se află Curtea de Apel Cluj, Tribunalul Comercial Cluj şi Judecătoria Cluj-Napoca.
                Tribunalul Cluj are în circumscripţie 5 judecătorii, Judecătoria Cluj-Napoca, Judecătoria Dej, Judecătoria Gherla, Judecătoria Turda şi Judecătoria Huedin.       </p>
                &emsp;&emsp;Până la data de 27 septembrie 2004 Tribunalul Cluj a fost organizat pe 3 secţii: Secţia Penală; Secţia Civilă şi Litigii de muncă; Secţia comercială şi de contencios administrativ.
    Din 27 septembrie 2004, după înfiinţarea Tribunalului Comercial Cluj, care a preluat atribuţiile secţiei comerciale, Tribunalul Cluj a funcţionat doar cu două secţii, până în 15 februarie 2005, când prin restructurarea Secţiei Civile s-a înfiinţat Secţia mixtă de contencios administrativ şi fiscal, conflicte de muncă şi asigurări sociale.

    <br />&emsp;&emsp;În prezent, în cadrul Tribunalului Cluj funcţionează trei secţii:
    <br />
                <div className="mx-5">
                    <Button className="d-block text-primary" onClick={this.toggleDrawer('left', true)}>Sectia Civila</Button>
                    <Button className="d-block text-primary " onClick={this.toggleDrawer('left', true)}>Sectia Penala</Button>
                    <Button className="d-block text-primary" onClick={this.toggleDrawer('left', true)}>Secţia Mixtă de contencios administrativ şi fiscal,conflicte de muncă şi asigurări sociale</Button>
                </div>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>


                <Divider />
                <Typography variant="display1" className="pt-2 " color="primary">Instanțe și istoricul intanțelor din județul Cluj</Typography>
                <br /><p> &emsp;&emsp; În documentele care sunt păstrate la Direcţia judeţeană Cluj a Arhivelor Naţionale se atestă că organizarea judecătorească în Cluj îşi avea un statut bine definit, încă din secolele XI - XIII.
                    Se păstrează în fondul arhivistic menţionat şi protocoale de judecată ale oraşului Cluj din perioada 1516-1849, în care apar pricini de judecată.
                    Între anii 1687-1914, ca instanţă de judecată, a funcţionat la Cluj un tribunal având în atribuţiile sale, potrivit Legi din 1871, judecarea proceselor civile şi penale.
                    În anul 1890 tribunalele din oraşele Cluj, Dej, Turda, Alba-Iulia, Bistriţa, Deva, Sibiu, făceau parte din raza de activitate a Curţii de Apel Regală din Cluj.
                    <br />&emsp;&emsp;În dispoziţiile normative ale Consiliului Dirigent de la Sibiu-Cluj din 1924, apoi, în Legea de organizare judecătorească din 25 iunie 1924, cu modificările din 28 noiembrie 1925 şi 19 decembrie 1925, regăsim Tribunalul Cluj, cu Judecătoriile Cluj (una urbană şi una rurală), Hida, Huedin, Mociu şi Sărmaş, Tribunalul Someş, cu Judecătoriile Beclean, Dej, Gârbou, Gherla, Ileanda şi Târgu Lăpuş şi Tribunalul Turda cu Judecătoriile Câmpeni, Iara, Luduş şi Turda.
                        Din anul 1949 tribunalele şi judecătoriile funcţionează în baza Decretului nr. 132/01.04.1949 privind organizarea judecătorească. Prin Legea nr. 5/19.06.1952 de reformă a justiţiei se schimbă denumirile instanţelor din Curte în Tribunal Regional şi din Tribunal şi Judecătorie Populară în Tribunal Popular. </p>
                <Divider />
                <Grid container={true} spacing={24} className="py-4" justify="center">
                    
                        <CardInstanta />
                </Grid>
                <Divider />

                <Typography variant="display1" className="pt-2 " color="primary">Istoricul palatului de justiție Cluj</Typography>
                <p><br /> &emsp;&emsp;
                Palatul Justiţiei Cluj, imobil proprietate a Ministerului Justiţiei, a fost  construit între anii 1898–1902. Clădirea are o deosebită valoare arhitectonică, fiind monument istoric şi de arhitectură catalogat. A fost proiectată pentru asigurarea activităţilor justiţiei în urmă cu un secol, pentru o populaţie de cca. 50.000 locuitori.
                Proiectul a fost întocmit de asociaţia de proiectanţi Epitotarsasag, Kotsis, Smiel, Fodor es Reisinger, arhitect Wagner Gyula, antreprenor Sebestyen David. Construcţia se află situată în centrul vechi al municipiului, pe fosta stradă Regele Carol al II-lea, actualmente Dorobanţilor nr. 2-4.
                <br />&emsp;&emsp;Terenul pe care este amplasată clădirea are o suprafaţă de 11.395 mp, suprafaţă construită de 5250 mp. şi suprafaţă desfăşurată de 19.950 mp.
                                                Clădirea face parte din ansamblul arhitectural Piaţa Victoriei ce mai cuprinde: Clădirea Operei Române şi Teatrul Naţional, Clădirea Prefecturii, sediul Finanţelor, Direcţia Căilor Ferate, Direcţia Silvică (în prezent Seminarul Teologic), toate fiind construite ca palate încăpătoare, cu adiţionări de încăperi concepute ca birouri, cu intrări şi scări monumentale, urcând spre saloanele de şedinţă şi festivităţi.
                                                Clădirea şi-a păstrat până astăzi destinaţia iniţială, cu menţiunea că, temporar, a adăpostit şi alte instituţii precum: Facultatea de Ştiinţe Economice, Biblioteca Judeţeană, Notariatul de Stat, Şcoala Populară de Artă, Editura Kriterion etc.
                <br />&emsp;&emsp;Clădirea este reprezentativă pentru arhitectura începutului de secol XX şi este construită în stil eclectic.
                                                Faţada nordică, ce constituie accesul la Tribunalul Cluj, Tribunalul Comercial Cluj şi Judecătoria Cluj-Napoca, este pretenţioasă şi prezintă un portic format din patru coloane dorice ce susţin balconul de la etajul I.
                                                Frizele au motive vegetale încărcate, console, ghirlande, volute şi chiar figuri în rondo-bosso realizate iniţial în întregime din teracotă.
                                                Arcele de peste ferestre şi cornişele cuprind şi figuri umane; ancadramentele ferestrelor şi solbancurile prezintă elemente sculptate în piatră.
                                                Faţada vestică se prezintă în acelaşi stil, intrarea (ce constituie accesul la Curtea de Apel Cluj), prezintă de asemenea porticul format din patru coloane dorice ce susţin balconul etajului I.
                <br />&emsp;&emsp;Unele elemente decorative ale faţadei sunt din piatră de Viştea, carieră  situată la 20 km de Cluj.
                                                În zona intrării dinspre vest, acoperişul prezintă o cupolă de mari dimensiuni, (9,0x28,70 m,  înălţime 8,60 m) cu învelitoare din solzi de eternit, bogat decorată cu elemente din tablă şi fier forjat, de o deosebită valoare artistică pentru compoziţia faţadei.
                Concepţia clădirii este adaptată funcţiunii.<br />&emsp;&emsp; Ca ansamblu constructiv are formă de patrulater neregulat şi prezintă 13 curţi interioare care asigură iluminarea şi ventilarea coridoarelor.
                                                Cele două intrări se leagă de restul construcţiei prin case de scară monumentale, cu trepte din piatră şi balustrade din fier forjat.
                                                Tavanele prezintă bolţi cu decoraţiuni din stucatură şi zone pictate, care astăzi sunt restaurate iar coloanele interioare au capiteluri sculptate.
                <br />&emsp;&emsp;Clădirea, concepută iniţial ca Palat de Justiţie, cuprindea noua săli de dezbateri, cu ornamentaţie bogată, realizată din stucaturi şi elemente sculptate, actualmente recondiţionate.
                </p>
                <Divider />
            </div>


        );
    }
}

export default withStyles(styles)(Prezentare);