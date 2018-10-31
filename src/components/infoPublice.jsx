import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Title from './Title/title';
import ListOfDocs from './listOfDocs';


const items = [{
    data: "13 decembrie 2018",
    titlu: "Birou de Informare și Relații publice",
    text: "Concurs grefier de sedinta nr 38 din 13 decembrie 2018Concurs grefier de sedinta nr 38 din 13 decembrie 2018Concurs grefier de sedinta nr 38 din 13 decembrie 2018Concurs grefier de sedinta nr 38 din 13 decembrie 2018Concurs grefier de sedinta nr 38 din 13 decembrie 2018Concurs grefier de sedinta nr 38 din 13 decembrie 2018Concurs grefier de sedinta nr 38 din 13 decembrie 2018Concurs grefier de sedinta nr 38 din 13 decembrie 2018Concurs grefier de sedinta nr 38 din 13 decembrie 2018Concurs grefier de sedinta nr 38 din 13 decembrie 2018Concurs grefier de sedinta nr 38 din 13 decembrie 2018Concurs grefier de sedinta nr 38 din 13 decembrie 2018Concurs grefier de sedinta nr 38 din 13 decembrie 2018Concurs grefier de sedinta nr 38 din 13 decembrie 2018",
    listOfDocs: [{
        titlu: "Buget Tribunalul Cluj 2018",
        locatie: "adsdas",
    },
    {
        titlu: "Buget Tribunalul Cluj 2017",
        locatie: "adsdas",
    }, {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    },
    {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    }],
},
{
    data: "13 decembrie 2015",
    titlu: "Actele normative care reglementează organizarea şi funcţionarea Tribunalului Cluj",
    text: "Legea nr. 304 / 2004 de organizare judiciară, cu modificările şi completările ulterioare;Regulamentul de ordine interioară a instanţelor judecătoreşti, adoptat prin Hotărârea nr. 387 din 22 septembrie 2005 a Consiliului Superior al Magistraturii, modificat şi completat de Hotărârea CSM nr. 352 din 10 mai 2006, respectiv Hotărârea CSM nr. 365 din 28 septembrie 2006, cu modificările şi completările ulterioare.",
    listOfDocs: [],
},
{
    data: "13 ianuarie 2017",
    titlu: "Concurs de promovare judecatori",
    listOfDocs: [{
        titlu: "Buget Tribunalul Cluj 2018",
        locatie: "adsdas",
    },
    {
        titlu: "Buget Tribunalul Cluj 2017",
        locatie: "adsdas",
    }, {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    },
    {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    }],
},
{
    data: "13 noiembrie 2015",
    titlu: "Activitatea desfăşurată de biroul de informare şi relaţii publice",
    text: " Biroul de informaţii publice a fost înfiinţat la data de 9 februarie 2004, conform Legii 544/2001 şi Normelor Metodologice de aplicare a legii, ocazie cu care a fost desemnată ca persoană responsabilă cu difuzarea informaţiilor de interes public un funcţionar public al Tribunalului Cluj. De asemenea, relaţia cu mass-media a fost asigurată de judecătorul delegat care a îndeplinit şi rolul de purtător de cuvânt. Odată cu intrarea în vigoare a noii Legi de organizare judiciară şi a Regulamentului de ordine interioară a instanţelor judecătoreşti, la data de 28 septembrie 2004, biroul a fost reorganizat sub denumirea de Biroul de informare şi relaţii publice, care îndeplineşte atribuţii privind difuzarea informaţiilor de interes public solicitate de reprezentanţii mass-media şi de către oricare altă persoană. Biroul este condus de un judecător care este şi purtător de cuvânt, având în componenţa sa şi un funcţionar public responsabil cu difuzarea informaţiilor publice.",
    listOfDocs: [{
        titlu: "Buget Tribunalul Cluj 2018",
        locatie: "adsdas",
    },
    {
        titlu: "Buget Tribunalul Cluj 2017",
        locatie: "adsdas",
    }, {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    },
    {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    }],
}, {
    data: "13 noiembrie 2015",
    titlu: "Modalităţile de contestare a deciziei Tribunalul Cluj",
    text: "Împotriva refuzului explicit sau tacit al angajatului desemnat al Tribunalului de aplicare a prevederilor Legii nr.544/2001 privind liberul acces la informaţiile de interes public, cu modificările şi completările ulterioare, se poate depune reclamaţie la preşedintele Tribunalului Cluj în termen de 30 de zile de la luarea la cunoştinţă de către persoana lezată. Aceasta va fi soluţionată de Comisia de analiză privind încălcarea dreptului de acces la informaţiile de interes public. De asemenea, în cazul în care o persoană se consideră vătămată în drepturile sale prevăzute de Legea nr.544/2001, aceasta poate face plângere la secţia de contencios administrativ a tribunalului în a cărei rază teritorială domiciliază sau a Tribunalului Cluj. Potrivit Legii nr. 544/2001, plângerea se face în termen de 30 de zile de la data expirării termenului în care Tribunalul Cluj trebuia să răspundă cererii solicitantului. Termenul în care Tribunalul trebuie să răspundă este, în cazul comunicării informaţiilor solicitate, de 10 zile sau de 30 de zile de la înregistrarea cererii, în funcţie de dificultatea, complexitatea, volumul lucrărilor documentare şi de urgenţa solicitării. În cazul refuzului comunicării informaţiilor solicitate, termenul este de 5 zile de la înregistrarea cererii. În cazul în care Tribunalul răspunde în termenul de 30 de zile, este obligată să-l înştiinţeze despre aceasta pe solicitant în termen de 10 zile de la înregistrarea cererii.",
    listOfDocs: [{
        titlu: "Buget Tribunalul Cluj 2018",
        locatie: "adsdas",
    },
    {
        titlu: "Buget Tribunalul Cluj 2017",
        locatie: "adsdas",
    }, {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    },
    {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    }],
},
{
    data: "13 noiembrie 2015",
    titlu: "Lista documentelor de interes public",
    text: " În principiu, toate documentele produse şi/sau gestionate de Tribunal sunt de interes public, cu excepţia registrului de evidenţă a sesizărilor privind confirmarea şi autorizarea interceptărilor şi înregistrărilor pe bandă magnetică sau pe orice alt tip de suport, precum şi cu excepţia acelora care conţin informaţii exceptate de la liberul acces, cum sunt cele prevăzute de art.12 din Legea nr.544/2001 privind liberul acces la informaţiile de interes public.",
    listOfDocs: [{
        titlu: "Buget Tribunalul Cluj 2018",
        locatie: "adsdas",
    },
    {
        titlu: "Buget Tribunalul Cluj 2017",
        locatie: "adsdas",
    }, {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    },
    {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    }],
},
{
    data: "13 noiembrie 2015",
    titlu: "Informaţiile privind activitatea specifică a Tribunalul Cluj",
    text: " În principiu, toate documentele produse şi/sau gestionate de Tribunal sunt de interes public, cu excepţia registrului de evidenţă a sesizărilor privind confirmarea şi autorizarea interceptărilor şi înregistrărilor pe bandă magnetică sau pe orice alt tip de suport, precum şi cu excepţia acelora care conţin informaţii exceptate de la liberul acces, cum sunt cele prevăzute de art.12 din Legea nr.544/2001 privind liberul acces la informaţiile de interes public.",
    listOfDocs: [{
        titlu: "Buget Tribunalul Cluj 2018",
        locatie: "adsdas",
    },
    {
        titlu: "Buget Tribunalul Cluj 2017",
        locatie: "adsdas",
    }, {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    },
    {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    }],
},
{
    data: "13 noiembrie 2015",
    titlu: "Atribuţiile judecătorilor",
    text: " Atribuţii jurisdicţionale: de a soluţiona cauzele aflate în competenţa de judecată a Tribunalului Cluj. Atribuţii administrative: acelea care, potrivit legii, vizează buna desfăşurare a activităţii administrative a instanţei (executări penale şi civile, analiza practicii judiciare, relaţia cu mass-media şi relaţiile publice, etc). Preşedintele, vicepreşedinţii şi Colegiul de conducere al tribunalului exercită atribuţiile de conducere a Tribunalului Cluj, iar preşedinţii de secţie asigură conducerea celor 3 secţii ale Tribunalului - a Secţiei civile, a Secţiei Mixte de contencios administrativ şi fiscal, litigii de muncă şi asigurări sociale şi a Secţiei penale şi de minori. De asemenea, preşedintele şi vicepreşedinţii au, după caz, atribuţii de coordonare sau de control a activităţii instanţelor aflate în raza de competenţă a Tribunalului Cluj.",
    listOfDocs: [],
    location: "./simple.pdf",
},
{
    data: "13 noiembrie 2015",
    titlu: "Atribuţiile compartimentelor din cadrul Tribunalul Cluj",
    text: " Atribuţii jurisdicţionale: de a soluţiona cauzele aflate în competenţa de judecată a Tribunalului Cluj. Atribuţii administrative: acelea care, potrivit legii, vizează buna desfăşurare a activităţii administrative a instanţei (executări penale şi civile, analiza practicii judiciare, relaţia cu mass-media şi relaţiile publice, etc). Preşedintele, vicepreşedinţii şi Colegiul de conducere al tribunalului exercită atribuţiile de conducere a Tribunalului Cluj, iar preşedinţii de secţie asigură conducerea celor 3 secţii ale Tribunalului - a Secţiei civile, a Secţiei Mixte de contencios administrativ şi fiscal, litigii de muncă şi asigurări sociale şi a Secţiei penale şi de minori. De asemenea, preşedintele şi vicepreşedinţii au, după caz, atribuţii de coordonare sau de control a activităţii instanţelor aflate în raza de competenţă a Tribunalului Cluj.",
    listOfDocs: [],
    location: "./simple.pdf",
},
{
    data: "13 noiembrie 2015",
    titlu: "Documentele produse şi/sau gestionate de Tribunalul Cluj",
    text: " Atribuţii jurisdicţionale: de a soluţiona cauzele aflate în competenţa de judecată a Tribunalului Cluj. Atribuţii administrative: acelea care, potrivit legii, vizează buna desfăşurare a activităţii administrative a instanţei (executări penale şi civile, analiza practicii judiciare, relaţia cu mass-media şi relaţiile publice, etc). Preşedintele, vicepreşedinţii şi Colegiul de conducere al tribunalului exercită atribuţiile de conducere a Tribunalului Cluj, iar preşedinţii de secţie asigură conducerea celor 3 secţii ale Tribunalului - a Secţiei civile, a Secţiei Mixte de contencios administrativ şi fiscal, litigii de muncă şi asigurări sociale şi a Secţiei penale şi de minori. De asemenea, preşedintele şi vicepreşedinţii au, după caz, atribuţii de coordonare sau de control a activităţii instanţelor aflate în raza de competenţă a Tribunalului Cluj.",
    listOfDocs: [],
    location: "./simple.pdf",
},
{
    data: "13 noiembrie 2015",
    titlu: "Date cu caracter personal",
    text: " Plângerile pot fi formulate de către persoanele fizice ale căror date personale au fost prelucrate cu încălcarea dispozițiilor legale aplicabile în materia protecției datelor personale (”persoane vizate”), în special în cazul în care reşedinţa obişnuită a petentului, locul său de muncă sau presupusa încălcare se află sau, după caz, are loc pe teritoriul României.În situația în care nu vă încadrați în această categorie (”persoane vizate”), vă rugăm să transmiteți cererea dvs. folosind adresa anspdcp@dataprotection.ro sau adresa poștală a ANSPDCP.Înainte de a începe completarea formularului de plângere, vă rugăm să consultați condițiile de admisibilitate din Procedura de primire și soluționare a plângerilor.",
    listOfDocs: [{
        titlu: "Decizia 3 ",
        locatie: "adsdas",
    },
    {
        titlu: "Buget Tribunalul Cluj 2017",
        locatie: "adsdas",
    }, {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    },
    {
        titlu: "Statistică privind situaţia...",
        locatie: "adsdas",
    }],
}];

class InfoPublice extends Component {


    state = {
        expanded: null,
    };

    handleChange = index => (event, expanded) => {
        this.setState({
            expanded: index,
        });
    };

    render() {
        const { expanded } = this.state;

        let listItems = items.map((item, index) => {
            return (
                <React.Fragment>
                    <ListItem key={index} button onClick={this.handleChange(index)}>
                        <ListItemIcon>
                            <img src={require("../images/icons/law2.png")} alt="law"></img>
                        </ListItemIcon>
                        <ListItemText
                            style={{ color: 'red' }}
                            inset
                            primary={<h6 style={{ color: '#146496' }}>{item.titlu}</h6>}
                            secondary={item.data}
                        />
                        {expanded === index ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    {/* Lista de documente( <List>) care apartin <ListItem> -ului de mai sus si care se regasesc intr-un collapse */}
                    <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                        <div className="container px-5  py-2 text-justify">{item.text}</div>
                        <ListOfDocs
                            list={item.listOfDocs}
                            icon={require("../images/icons/arow2.png")}
                            button={true}
                            component="div"
                        />
                    </Collapse>
                </React.Fragment>
            )
        });

        return (
            <React.Fragment>
                <Title
                    title="Informații Publice"
                    page="Informații Publice"
                    subpage="Informații"
                />

                <div className="my-5 container">
                    <List
                        component="nav"
                    >
                        {listItems}
                    </List>
                </div>
            </React.Fragment>
        );
    }
}

export default InfoPublice;