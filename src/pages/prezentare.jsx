import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CardInstanta from '../components/cardInstanta';
import Title from '../components/Header/HeaderTitlePage';
import '../css/prezentare.css';
class Prezentare extends Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,

    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        return (
            <React.Fragment>
                <Title title="Istoric şi prezentare" page="Prezentare" subpage="Despre Instanță" breadcrumbs={true} />

                {/* ISTORIC */}
                <section className="resume-section p-lg-5 d-flex flex-column" id="istoric">
                    <div className="container text-justify" >
                        <div className="row my-auto">
                            <div className="col-12">
                                <h2 className=" text-center">Istoricul Tribunalului Cluj</h2>
                                <div className="mb-5 heading-border"></div>
                            </div>
                            <div className="main-award" style={{ margin: 'auto' }} id="award-box">

                                {/* Prezent */}
                                <div className="award">
                                    <div className="award-icon"></div>
                                    <div className="award-content">
                                        <span className="date"> 2005 - prezent</span>
                                        <h5 className="title">Organizarea administrativ-teritorială</h5>
                                        <p className="description">
                                            Tribunalul Cluj îşi desfăşoară activitatea în baza Legii nr. 304/2005, privind organizarea judecătorească. Tribunalului Cluj are sediul în Cluj-Napoca, str. Dorobanţilor, nr. 2-4, în clădirea Palatului de Justiţie Cluj, în aceeaşi locaţie în care se află Curtea de Apel Cluj, Tribunalul Comercial Cluj şi Judecătoria Cluj-Napoca.
                                    </p>
                                    </div>
                                </div>

                                {/* 2005 */}
                                <div className="award">
                                    <div className="award-icon"></div>
                                    <div className="award-content">
                                        <span className="date">15 februarie 2005</span>
                                        <h5 className="title">Reogranizarea secţiilor Tribunalului Cluj </h5>
                                        <p className="description">
                                            Până în 15 februarie 2005, când prin restructurarea Secţiei Civile s-a înfiinţat Secţia mixtă de contencios administrativ şi fiscal, conflicte de muncă şi asigurări sociale. În prezent, în cadrul Tribunalului Cluj funcţionează trei secţii: Secţia Civilă, Secţia Penală şi Secţia de contencios administrativ şi fiscal, conflicte de muncă şi asigurări sociale.
                                    </p>
                                    </div>
                                </div>

                                {/* 2004 */}
                                <div className="award">
                                    <div className="award-icon"></div>
                                    <div className="award-content">
                                        <span className="date">27 septembrie 2004</span>
                                        <h5 className="title">Restructurarea secţiilor</h5>
                                        <p className="description">
                                            Până la data de 27 septembrie 2004 Tribunalul Cluj a fost organizat pe 3 secţii: Secţia Penală; Secţia Civilă şi Litigii de muncă; Secţia comercială şi de contencios administrativ. Din 27 septembrie 2004, după înfiinţarea Tribunalului Comercial Cluj, care a preluat atribuţiile secţiei comerciale, Tribunalul Cluj a funcţionat doar cu două secţii.
                                        </p>
                                    </div>
                                </div>

                                {/* 1968- prezent */}
                                <div className="award">
                                    <div className="award-icon"></div>
                                    <div className="award-content">
                                        <span className="date">Anul 1968</span>
                                        <h5 className="title">Organizarea administrativ-teritorială</h5>
                                        <p className="description">
                                            După reorganizarea administrativ-teritorială din 1968 potrivit Legii nr. 58 din 26 decembrie 1968, Tribunalul Regional Cluj este desfiinţat şi înlocuit cu Tribunalul Judeţean Cluj. Prin Legea nr. 92/04.08.1992 pentru organizare judecătorească, Tribunalul Cluj are în circumscripţie Judecătoria Cluj-Napoca, Judecătoria Dej, Jud. Gherla, Jud. Turda şi Judecătoria Huedin.
                                    </p>
                                    </div>
                                </div>

                                {/* 1949 */}
                                <div className="award">
                                    <div className="award-icon"></div>
                                    <div className="award-content">
                                        <span className="date">Anul 1949</span>
                                        <h5 className="title">Decretului nr. 132/01.04.1949</h5>
                                        <p className="description">
                                            Din anul 1949 tribunalele şi judecătoriile funcţionează în baza Decretului nr. 132/01.04.1949 privind organizarea judecătorească. Prin Legea nr. 5/19.06.1952 de reformă a justiţiei se schimbă denumirile instanţelor din Curte în Tribunal Regional şi din Tribunal şi Judecătorie Populară în Tribunal Popular.
                                    </p>
                                    </div>
                                </div>



                                {/* 1924 */}
                                <div className="award">
                                    <div className="award-icon"></div>
                                    <div className="award-content">
                                        <span className="date">Anul 1924</span>
                                        <h5 className="title">Normativele şi legile anului 1924</h5>
                                        <p className="description">
                                            În dispoziţiile normative ale Consiliului Dirigent de la Sibiu-Cluj din 1924, apoi, în Legea de organizare judecătorească din 25 iunie 1924, cu modificările din 28 noiembrie 1925 şi 19 decembrie 1925, regăsim Tribunalul Cluj, cu Judecătoriile Cluj (una urbană şi una rurală), Hida, Huedin, Mociu şi Sărmaş, Tribunalul Someş, cu Judecătoriile Beclean, Dej, Gârbou, Gherla, Ileanda şi Târgu Lăpuş şi Tribunalul Turda cu Judecătoriile Câmpeni, Iara, Luduş şi Turda. Din anul 1949 tribunalele şi judecătoriile funcţionează în baza Decretului nr. 132/01.04.1949 privind organizarea judecătorească.
                                        </p>
                                    </div>
                                </div>

                                {/* 1687-1914 */}
                                <div className="award">
                                    <div className="award-icon"></div>
                                    <div className="award-content">
                                        <span className="date">1687 - 1914</span>
                                        <h5 className="title">Funcţionarea - Legea din 1871</h5>
                                        <p className="description">
                                            Între anii 1687-1914, ca instanţă de judecată, a funcţionat la Cluj un tribunal având în atribuţiile sale, potrivit Legi din 1871, judecarea proceselor civile şi penale. În anul 1890 tribunalele din oraşele Cluj, Dej, Turda, Alba-Iulia, Bistriţa, Deva, Sibiu, făceau parte din raza de activitate a Curţii de Apel Regală din Cluj.
                                    </p>
                                    </div>
                                </div>

                                {/* 1516-1849 */}
                                <div className="award">
                                    <div className="award-icon"></div>
                                    <div className="award-content">
                                        <span className="date">1516 - 1849</span>
                                        <h5 className="title">Primele atestări</h5>
                                        <p className="description">
                                            În documentele care sunt păstrate la Direcţia judeţeană Cluj a Arhivelor Naţionale se atestă că organizarea judecătorească în Cluj îşi avea un statut bine definit, încă din secolele XI - XIII. Se păstrează în fondul arhivistic menţionat şi protocoale de judecată ale oraşului Cluj din perioada 1516-1849, în care apar pricini de judecată.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Istoricul Palatului de justitie */}
                <section class=" d-flex flex-column" id="skills">
                    <div class="p-lg-3 p-3 skill-cover ">
                        <div class="row text-center my-auto ">
                            <div class="col-md-12 col-sm-6">
                                <div class="skill-item text-justify px-3">
                                    <h2 className=" text-center" style={{ color: 'white'}}>Istoricul palatului de justiţie</h2>
                                    <p>
                                        <br /> &emsp;&emsp;&emsp;
                                            Palatul Justiţiei Cluj, imobil proprietate a Ministerului Justiţiei, a fost  construit între anii 1898–1902. Clădirea are o deosebită valoare arhitectonică, fiind monument istoric şi de arhitectură catalogat.
                                            A fost proiectată pentru asigurarea activităţilor justiţiei în urmă cu un secol, pentru o populaţie de cca. 50.000 locuitori.Proiectul a fost întocmit de asociaţia de proiectanţi Epitotarsasag,
                                            Kotsis, Smiel, Fodor es Reisinger, arhitect Wagner Gyula, antreprenor Sebestyen David. Construcţia se află situată în centrul vechi al municipiului, pe fosta stradă Regele Carol al II-lea, actualmente Dorobanţilor nr. 2-4.
                                        <br />&emsp;&emsp;
                                            Terenul pe care este amplasată clădirea are o suprafaţă de 11.395 mp, suprafaţă construită de 5250 mp. şi suprafaţă desfăşurată de 19.950 mp.
                                            Clădirea face parte din ansamblul arhitectural Piaţa Victoriei ce mai cuprinde: Clădirea Operei Române şi Teatrul Naţional, Clădirea Prefecturii, sediul Finanţelor, Direcţia Căilor Ferate, Direcţia Silvică (în prezent Seminarul Teologic),
                                            toate fiind construite ca palate încăpătoare, cu adiţionări de încăperi concepute ca birouri, cu intrări şi scări monumentale, urcând spre saloanele de şedinţă şi festivităţi.
                                            Clădirea şi-a păstrat până astăzi destinaţia iniţială, cu menţiunea că, temporar, a adăpostit şi alte instituţii precum: Facultatea de Ştiinţe Economice, Biblioteca Judeţeană, Notariatul de Stat, Şcoala Populară de Artă, Editura Kriterion etc.
                                        <br />&emsp;&emsp;
                                            Clădirea este reprezentativă pentru arhitectura începutului de secol XX şi este construită în stil eclectic.
                                            Faţada nordică, ce constituie accesul la Tribunalul Cluj, Tribunalul Comercial Cluj şi Judecătoria Cluj-Napoca, este pretenţioasă şi prezintă un portic format din patru coloane dorice ce susţin balconul de la etajul I.
                                            Frizele au motive vegetale încărcate, console, ghirlande, volute şi chiar figuri în rondo-bosso realizate iniţial în întregime din teracotă.
                                            Arcele de peste ferestre şi cornişele cuprind şi figuri umane; ancadramentele ferestrelor şi solbancurile prezintă elemente sculptate în piatră.
                                            Faţada vestică se prezintă în acelaşi stil, intrarea (ce constituie accesul la Curtea de Apel Cluj), prezintă de asemenea porticul format din patru coloane dorice ce susţin balconul etajului I.
                                            Unele elemente decorative ale faţadei sunt din piatră de Viştea, carieră  situată la 20 km de Cluj.
                                            În zona intrării dinspre vest, acoperişul prezintă o cupolă de mari dimensiuni, (9,0x28,70 m,  înălţime 8,60 m) cu învelitoare din solzi de eternit,
                                            bogat decorată cu elemente din tablă şi fier forjat, de o deosebită valoare artistică pentru compoziţia faţadei. Concepţia clădirii este adaptată funcţiunii.
                                        < br />&emsp;&emsp;
                                            Ca ansamblu constructiv are formă de patrulater neregulat şi prezintă 13 curţi interioare care asigură iluminarea şi ventilarea coridoarelor.
                                            Cele două intrări se leagă de restul construcţiei prin case de scară monumentale, cu trepte din piatră şi balustrade din fier forjat.
                                            Tavanele prezintă bolţi cu decoraţiuni din stucatură şi zone pictate, care astăzi sunt restaurate iar coloanele interioare au capiteluri sculptate.
                                        <br />&emsp;&emsp;
                                            Clădirea, concepută iniţial ca Palat de Justiţie, cuprindea noua săli de dezbateri, cu ornamentaţie bogată, realizată din stucaturi şi elemente sculptate, actualmente recondiţionate.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Instantele din circumscriptia trimbunalul Cluj */}
                <section className="resume-section p-3 p-lg-5 d-flex flex-column bg-light" id="instante">
                    <div className="container text-justify" >
                        {/* Cards cu toate cele 5 judecatorii */}
                        <Grid container={true} spacing={24} className="py-4" justify="center">
                            <CardInstanta />
                        </Grid>
                    </div>
                </section>



            </React.Fragment>


        );
    }
}

export default Prezentare;