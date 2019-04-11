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
        openPlata: false,
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

    handleClickOpenPlata = scroll => () => {
        this.setState({ openPlata: true, scroll });
    };

    handleClosePlata = () => {
        this.setState({ openPlata: false });
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
                    title="Informaţii Utile / Taxe de timbru "
                    page="Taxe de timbru "
                    breadcrumbs={true}
                />

                {/* Calculator taxe de timbru */}
                <div className="container py-5" >
                    <Grid container className="bg-light" justify="center" spacing={16} >
                        {/* Title */}
                        <Grid item align="center" xs={12} md={12} className=" rounded bg-secondary text-light" >
                            <h4>Calculator informativ taxe</h4>
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


                <div className="container py-3" >
                    <Button className="bg-dark text-white" onClick={this.handleClickOpen('paper')}>Temei legal</Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        scroll={this.state.scroll}
                        aria-labelledby="scroll-dialog-title"
                    >
                        <DialogTitle id="scroll-dialog-title">Temei Legel</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                &emsp;Ordonanţa de urgenţă a Guvernului nr. 80 din 26 iunie 2013 privind taxele judiciare de timbru, publicată în Monitorul Oficial nr. 392 din 29 iunie 2013.
                                <br />&emsp;Aplicarea în timp a legii privind taxele judiciare de timbru:

                                <br />&emsp;<b><br />- pentru cererile şi acţiunile introduse până la data intrării în vigoare a Ordonanţei de urgenţă a Guvernului nr. 80 din 26 iunie 2013,</b> se aplică timbrul judiciar, conform Ordonanţei Guvernului nr.32 din 18 august 1995 şi Normele metodologice nr. 2083/1997, iar taxele judiciare de timbru se stabilesc şi se plătesc în cuantumul prevăzut de legea în vigoare la data introducerii lor, respectiv Legea nr. 146 din 24 iulie 1997 şi Normele metodologice de aplicare, aprobate prin Ordinul nr. 760/C/1999.
                                <br /><br />&emsp;<b>- cererile şi acţiunile introduse după data intrării în vigoare a Ordonanţei de urgenţă a Guvernului nr. 80 din 26 iunie 2013,</b> intrată în vigoare la data de 26 iunie 2013, sunt supuse taxelor judiciare de timbru prevăzute în această ordonanţă de urgenţă.

                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary"> OK</Button>
                        </DialogActions>
                    </Dialog>
                </div>

                <div className="container" >
                    <Button className="bg-dark text-white" onClick={this.handleClickOpenPlata('paper')}>Modalitate şi loc de plată</Button>
                    <Dialog
                        open={this.state.openPlata}
                        onClose={this.handleClosePlata}
                        scroll={this.state.scroll}
                        aria-labelledby="scroll-dialog-title"
                    >
                        <DialogTitle id="scroll-dialog-title">Modalitate şi loc de plată</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                &emsp;Taxele judiciare de timbru se plătesc de debitorul taxei, în numerar, prin virament sau în sistem on-line, într-un cont distinct de venituri al bugetului local "Taxe judiciare de timbru şi alte taxe de timbru", al unităţii administrativ teritoriale în care persoana fizică are domiciliul sau reşedinţa ori, după caz, în care persoana juridică are sediul social. Costurile operaţiunilor de transfer al sumelor datorate ca taxă judiciară de timbru sunt în sarcina debitorului taxei.
                                <br /><br />&emsp;Dacă persoana care datorează taxa judiciară de timbru nu are nici domiciliul, nici reşedinţa ori, după caz, sediul în România, taxa judiciară de timbru se plăteşte în contul bugetului local al unităţii administrativ teritoriale în care se află sediul instanţei la care se introduce acţiunea sau cererea.
                                <br /><br />&emsp;Pentru plătitorii cu domiciliul sau reşedinţa în Cluj, taxele judiciare de timbru se virează pe bază de ordin de plată la Trezoreria Statului, sau se depun în numerar de către plătitori la orice Oficiu poştal, în contul <b>RO79TREZ21621070203XXXXX - Cod fiscal 4305857 - Consiliul Local Cluj</b>, iar dovada în faţa instanţei de judecată se face prin chitanţa eliberată.

                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClosePlata} color="primary"> OK</Button>
                        </DialogActions>
                    </Dialog>

                </div>


                {/* Textul legii taxelor de timbru */}
                <div className="container py-5" >
                    <p align="justify">&emsp;În raport cu dispoziţiile în vigoare ale O.U.G. nr.80/2013 privind taxele judiciare de timbru, acţiunile şi cererile adresate instanţelor de judecată pot fi clasificate, după cum urmează:
                        <br />
                        <h5>
                            <br />
                            <b>A.  Acţiuni şi cereri evaluabile în bani – care sunt taxate cu o taxă judiciară de timbru la valoare conform art. 3, 4 şi 5 din O.U.G. nr.80/2013</b>
                        </h5>
                        <br />- art. 3 din O.U.G. nr.80/2013, <br />„(1) Acţiunile şi cererile evaluabile în bani, introduse la instanţele judecătoreşti, se taxează astfel:
                        <br />&emsp; a) până la valoarea de 500 lei - 8%, dar nu mai puţin de 20 lei;
                        <br />&emsp; b) între 501 lei şi 5.000 lei - 40 lei + 7% pentru ce depăşeşte 500 lei;
                        <br />&emsp; c) între 5.001 lei şi 25.000 lei - 355 lei + 5% pentru ce depăşeşte 5.000 lei;
                        <br />&emsp; d) între 25.001 lei şi 50.000 lei - 1.355 lei + 3% pentru ce depăşeşte 25.000 lei;
                        <br />&emsp; e) între 50.001 lei şi 250.000 lei - 2.105 lei +2% pentru ce depăşeşte 50.000 lei;
                        <br />&emsp; f) peste 250.000 lei - 6.105 lei + 1% pentru ce depăşeşte 250.000 lei.

                        <br />(2) Se taxează potrivit alin. (1) şi următoarele categorii de acţiuni:
                        <br />&emsp; a) în constatarea nulităţii, anularea, rezoluţiunea sau rezilierea unui act juridic patrimonial; cererea privind repunerea părţilor în situaţia anterioară este scutită de taxă de timbru dacă este accesorie acestor cereri;
                        <br />&emsp; b) privind constatarea existenţei sau inexistenţei unui drept patrimonial;
                        <br />&emsp; c) prin care se solicită pronunţarea unei hotărâri judecătoreşti care ţine loc de act autentic de înstrăinare a unor bunuri imobile sau de constituire a unor drepturi reale asupra acestora.”
                        <br /><br />- art. 4 din O.U.G. nr.80/2013 „(1) În cazul acţiunilor posesorii taxa judiciară de timbru se calculează la o valoare care se stabileşte la 20% din valoarea bunului a cărui posesie se solicită.
                        <br /> (2) Taxa judiciară de timbru pentru acţiunile care au ca obiect un dezmembrământ al dreptului de proprietate se calculează la o valoare stabilită la 20% din valoarea bunului asupra căruia poartă dezmembrământul. În cazul cererilor care au ca obiect servituţi taxa judiciară de timbru se calculează prin raportare la 20% din valoarea imobilului asupra căruia se solicită constituirea servituţii.”
                        <br /><br />- art. 5 din O.U.G. nr.80/2013 „(1) Cererile în materia partajului judiciar se taxează astfel:
                        <br />&emsp; a) stabilirea bunurilor supuse împărţelii - 3% din valoarea acestora;
                        <br />&emsp; b) stabilirea calităţii de coproprietar şi stabilirea cotei-părţi ce se cuvine fiecărui coproprietar - 50 lei pentru fiecare coproprietar;
                        <br />&emsp; c) creanţe pe care coproprietarii le au unii faţă de alţii, născute din starea de proprietate comună - 3% din valoarea creanţelor a căror recunoaştere se solicită;
                        <br />&emsp; d) cererea de raport - 3% din valoarea bunurilor a căror raportare se solicită;
                        <br />&emsp; e) cererea de reducţiune a liberalităţilor excesive - 3% din valoarea părţii de rezervă supusă reîntregirii prin reducţiunea liberalităţilor;
                        <br />&emsp; f) cererea de partaj propriu-zis, indiferent de modalitatea de realizare a acestuia - 3% din valoarea masei partajabile.
                        <br /><br /> (2) Dacă cererile în materia partajului judiciar prevăzute de alin. (1) se formulează în cadrul aceleiaşi acţiuni, aceasta se taxează cu o singură taxă de 5% din valoarea masei partajabile.”
                    </p>
                    <h5>
                        <br />
                        <b>B.  Acţiuni şi cereri neevaluabile în bani – care se taxează cu o taxă judiciară de timbru în cuantum fix, stabilit în mod expres de dispoziţiile O.U.G. nr.80/2013</b>
                        <br />
                        <br />
                    </h5>

                    <h5><b>C.  Acţiuni şi cereri scutite de la plata taxelor judiciare de timbru – conform art.29 şi 30 din O.U.G. nr.80/2013</b></h5>

                    <p align="justify"><b> Se taxează cu o taxă fixă următoarele categorii de acţiuni şi cereri, al căror obiect nu este evaluabil în bani:<b></b></b>
                        <br />&emsp;- cererile de valoare redusă, soluţionate potrivit procedurii speciale prevăzute de titlul X al cărţii a VI-a din Legea nr. 134/2010 privind Codul de procedură civilă, republicată, cu modificările şi completările ulterioare;
                        <br />&emsp;- cererile privind ordonanţa de plată, prevăzută de titlul IX al cărţii a VI-a din Codul de procedură civilă;
                        <br />&emsp;- cererile de evacuare din imobilele folosite sau ocupate fără drept, soluţionate potrivit procedurii speciale prevăzute de titlul XI al cărţii a VI-a din Codul de procedură civilă;
                        <br />&emsp;- cererile formulate pe cale de ordonanţă preşedinţială, când sunt neevaluabile în bani,
                        <br />&emsp;- acţiunile privind stabilirea şi acordarea de despăgubiri pentru daunele morale aduse onoarei, demnităţii sau reputaţiei unei persoane fizice;
                        <br />&emsp;- cereri pentru constatarea existenţei sau inexistenţei unui drept nepatrimonial;
                        <br />&emsp;- cereri în anularea sau în constatarea nulităţii unui act juridic nepatrimonial;
                        <br />&emsp;- cereri care privesc dreptul de folosinţă a bunului închiriat sau arendat, dacă acestea nu privesc şi plata anumitor sume de bani;
                        <br />&emsp;- acţiunile în grăniţuire; în ipoteza în care prin aceeaşi cerere se revendică şi o porţiune de teren, la taxa judiciară de timbru stabilită pentru acţiunea în grăniţuire se adaugă şi taxa corespunzătoare valorii suprafeţei revendicate.
                        <br />&emsp;- cererea privind repunerea părţilor în situaţia anterioară, când nu este accesorie acţiunii în constatarea nulităţii, anularea, rezoluţiunea sau rezilierea unui act juridic patrimonial;
                        <br />&emsp;- cereri de recuzare în materie civilă, pentru fiecare participant la proces, pentru care se solicită recuzarea
                        <br />&emsp;- cereri de strămutare în materie civilă
                        <br />&emsp;- cereri de repunere în termen
                        <br />&emsp;- cereri de perimare
                        <br />&emsp;- cereri de reexaminare împotriva încheierii prin care au fost stabilite amenzile judiciare şi despăgubirile potrivit art. 190 din Codul de procedură civilă
                        <br />&emsp;- cereri de reexaminare împotriva încheierii de anulare a cererii de chemare în judecată;
                        <br />&emsp;- cereri pentru repunerea pe rol, când suspendarea judecării se datorează părţilor
                        <br />&emsp;- cereri pentru refacerea înscrisurilor şi a hotărârilor dispărute - 50 lei;
                        <br />&emsp;- cereri pentru eliberarea de copii simple de pe înscrisurile aflate la dosar;
                        <br />&emsp;- cereri pentru legalizarea de copii de pe înscrisurile aflate la dosar,
                        <br />&emsp;- cereri pentru eliberarea oricăror altor certificate prin care se atestă fapte sau situaţii rezultate din evidenţele instanţelor de judecată ori cu privire la dosarele aflate în arhiva acestora;
                        <br />&emsp;- cereri pentru eliberarea de către instanţele judecătoreşti de copii de pe hotărârile judecătoreşti, cu menţiunea că sunt definitive;
                        <br />&emsp;- cereri pentru încuviinţarea executării silite, pentru fiecare titlu executoriu;
                        <br />&emsp;- cereri de suspendare a executării silite, inclusiv a executării provizorii;
                        <br />&emsp;- cereri prin care părţile solicită instanţei pronunţarea unei hotărâri care să consfinţească înţelegerea părţilor, inclusiv când este rezultată din acordul de mediere
                        <br />&emsp;- cereri în legătură cu măsurile asigurătorii
                        <br />&emsp;- contestaţia privind tergiversarea procesului şi plângerea împotriva încheierii de soluţionare a contestaţiei
                        <br />&emsp;- cereri privind înregistrarea partidelor politice sau pentru modificarea statutului acestora
                        <br />&emsp;- cereri pentru dobândirea personalităţii juridice de către organizaţiile prevăzute în Legea dialogului social nr. 62/2011, republicată, cu modificările ulterioare, precum şi pentru modificarea actelor constitutive ale acestora
                        <br />&emsp;- cereri pentru dobândirea personalităţii juridice de către asociaţiile fără scop lucrativ, fundaţii, uniuni şi federaţii de persoane juridice fără scop lucrativ, precum şi pentru modificarea actelor constitutive ale acestora
                        <br />&emsp;- cereri pentru recunoaşterea dreptului de autor şi a drepturilor conexe, pentru constatarea încălcării acestora şi repararea prejudiciilor, inclusiv plata drepturilor de autor şi a sumelor cuvenite pentru opere de artă, precum şi pentru luarea oricăror măsuri în scopul prevenirii producerii unor pagube iminente, pentru asigurarea reparării acestora ori pentru restabilirea dreptului atins
                        <br />&emsp;- cereri pentru recunoaşterea calităţii de inventator, de titular de brevet, a drepturilor născute din brevetul de invenţie, din contractele de cesiune şi licenţă, inclusiv drepturile patrimoniale ale inventatorului cererile neevaluabile în bani privitoare la drepturile conferite de marcă, desene şi modele industriale
                        <br />&emsp;-  cererea de divorţ
                        <br />&emsp;- cererea privind acordarea despăgubirilor sau pentru stabilirea prestaţiei compensatorii
                        <br />&emsp;- cererile care nu sunt accesorii unei cereri de divorţ şi care au ca obiect stabilirea locuinţei copilului, exercitarea autorităţii părinteşti, stabilirea contribuţiei părinţilor la cheltuielile de creştere şi educare a copiilor, dreptul părintelui sau al altor persoane decât părinţii de a avea legături personale cu copilul, locuinţa familiei
                        <br />&emsp;- în materia contenciosului administrativ, cererile introduse de cei vătămaţi în drepturile lor printr-un act administrativ sau prin refuzul nejustificat al unei autorităţi administrative de a le rezolva cererea referitoare la un drept recunoscut de lege
                        <br />&emsp;- în materie contravenţională, plângerea împotriva procesului-verbal de constatare şi sancţionare a contravenţiei, precum şi calea de atac împotriva hotărârii pronunţate
                        <br />&emsp;- acţiunile şi cererile în materie de carte funciară, când nu pun în discuţie fondul dreptului;
                        <br />&emsp;- cererea privind înregistrarea asociaţiilor de proprietari, de locatari sau mixte şi apelul împotriva încheierii judecătorului-delegat
                        <br />Orice alte acţiuni sau cereri neevaluabile în bani, cu excepţia celor scutite de plata taxei judiciare de timbru potrivit legii, se taxează cu 20 lei.
                        <br />
                        <br />  <b>Timbrul judiciar</b> în prezent nu se mai impune a fi achitat decât pentru acţiunile şi cererile înregistrate sub imperiul Legii nr.146/1997.
                        <br />  Taxa judiciară de timbru, plătită la introducerea acţiunii sau a cererii ori pe parcursul procesului, se suporta de către partea căzută în pretenţii, potrivit Codului de procedura civilă.
                        <br />
                        <br /> <b> Cererea de reexaminare</b> – potrivit art. 39 din O.U.G. nr.80/2013, împotriva modului de stabilire a taxei judiciare de timbru se poate formula cerere de reexaminare, la aceiaşi instanţă, în termen de 3 zile de la comunicarea taxei datorate. Cererea de reexaminare este scutită de plata taxei judiciare de timbru.
                        <br />
                    </p>
                </div>


            </React.Fragment>
        );
    }
}

export default TaxeTimbru;