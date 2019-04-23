/* import { fax } from "react-icons-kit/fa/fax";
import { notepad_remove } from 'react-icons-kit/ikons/notepad_remove'
import { phoneSquare } from "react-icons-kit/fa/phoneSquare";
import { mail } from "react-icons-kit/ikons/mail"; */

export const orarInstante = [{
    nume: "Tribunalul Cluj",
    refOrar: "http://tribunalulcluj.ro/#/contact"
},
{
    nume: "Judecatoria Cluj-Napoca",
    refOrar: "http://portal.just.ro/211/SitePages/contact.aspx?id_inst=211"
},
{
    nume: "Judecatoria Dej",
    refOrar: "http://portal.just.ro/219/SitePages/contact.aspx?id_inst=219"
},
{
    nume: "Judecatoria Gherla",
    refOrar: "http://portal.just.ro/235/SitePages/contact.aspx?id_inst=235"
},
{
    nume: "Judecatoria Huedin",
    refOrar: "http://portal.just.ro/242/SitePages/contact.aspx?id_inst=242"
},
{
    nume: "Judecatoria Turda",
    refOrar: "http://portal.just.ro/328/SitePages/contact.aspx?id_inst=328"
},
{
    nume: "Tribunalul Specializat Cluj",
    refOrar: "http://portal.just.ro/1285/SitePages/contact.aspx?id_inst=1285"
},

]

export const detaliiInstante = [
    {
        nume: "Tribunalul Cluj",
        adresa: {
            oras: "Cluj-Napoca",
            str: "Calea Dorobantilor",
            nr: "2-4",
            cod: "400117",
        },
        tel: ["0264-596.111", "0264-431.057", "0264-431.908", "0264-595.812"],
        fax: "0264-595.844",
        email: "tr-cluj@just.ro",
    },
    {
        nume: "Tribunalul Specializat Cluj",
        adresa: {
            oras: "Cluj-Napoca",
            str: "Calea Dorobantilor",
            nr: "2-4",
            cod: "400117",
        },
        tel: ["0264-596.110", "0264-596.111"],
        fax: "0264-504.366",
        email: "tr-comercial-cluj@just.ro",
    },
    {
        nume: "Judecatoria Cluj-Napoca",
        adresa: {
            oras: "Cluj-Napoca",
            str: "Calea Dorobantilor",
            nr: "2",
            cod: "400117",
        },
        tel: ["0264-596.111", "0264-431.057", "0264-431.908", "0264-595.812"],
        fax: "0264-431.033",
        email: "jud-cluj@just.ro",
    },
    {
        nume: "Judecatoria Dej",
        adresa: { oras: "Dej", str: "16 Februarie", nr: "2-4", cod: "405200" },
        tel: ["0264-212.110"],
        fax: "0264-213.015",
        email: "jud-dej@just.ro",
    },
    {
        nume: "Judecatoria Gherla",
        adresa: { oras: "Gherla", str: "Bobalna", nr: "55", cod: "405300" },
        tel: ["0264 - 243.854", "0264 - 243.251"],
        fax: "0264-243.773; 0264-243.701",
        email: "jud-gherla@just.ro",
    },
    {
        nume: "Judecatoria Huedin",
        adresa: { oras: "Huedin", str: "Avram Iancu", nr: "2", cod: "405400" },
        tel: ["0264-351.788"],
        fax: "0264-353.160",
        email: "jud-huedin@just.ro",
    },
    {
        nume: "Judecatoria Turda",
        adresa: { oras: "Turda", str: "Piata Romana", nr: "12", cod: "401139" },
        tel: ["0264-311.985"],
        fax: "0264-311.851",
        email: "jud-turda@just.ro",
    },
];

export const carouselImages = [
    {
        src: require('../images/5.jpg'),
        altText: 'TRIBUNALUL CLUJ',
        caption: 'TRIBUNALUL CLUJ',
        subcaption: 'Nimic nu e mai presus de lege',
    },
    {
        src: require('../images/trcj1.jpeg'),
        altText: 'TRIBUNALUL CLUJ',
        caption: 'TRIBUNALUL CLUJ',
        subcaption: 'Nimic nu e mai presus de lege',
    },
    {
        src: require('../images/jud-cluj.jpg'),
        altText: 'TRIBUNALUL CLUJ',
        caption: 'TRIBUNALUL CLUJ',
        subcaption: 'Nimic nu e mai presus de lege',
    },
];

export const prezentareInstante = [
    {
        src: require('../images/jud_dej.jpg'),
        title: 'Judecatoria Dej',
        content: 'Judecătoria Dej îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească. Judecătoria Dej are sediul în municipiul Dej, P-ţa 16 Februarie, nr. 4 în clădirea Palatului de Justiţie Dej. ',
        link: "http://portal.just.ro/219/SitePages/acasa_default.aspx?id_inst=219",
    },
    {
        title: 'Instanţele din circumscripţia Tribunalului Cluj',
        content: ' După reorganizarea administrativ-teritorială din 1968 potrivit Legii nr. 58 din 26 decembrie 1968, Tribunalul Regional Cluj este desfiinţat şi înlocuit cu Tribunalul Judeţean Cluj. Prin Legea nr. 92/04.08.1992 pentru organizare judecătorească, se înfiinţează Curtea de Apel Cluj, care are în circumscripţie: Tribunalul Cluj, Tribunalul Bistriţa Năsăud, Tribunalul Maramureş şi Tribunalul Sălaj. Prin aceeaşi lege Tribunalul Cluj are în circumscripţie Judecătoria Cluj-Napoca, Judecătoria Dej, Jud. Gherla, Jud. Turda şi Judecătoria Huedin. ',
    },
    {
        src: require('../images/jud-cluj.jpg'),
        title: 'Judecatoria Cluj',
        content: ' Judecătoria Cluj-Napoca îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească. Judecătoria are sediul pe str. Dorobanţilor, nr.2 în clădirea Palatului de Justiţie.',
        link: "http://portal.just.ro/211/SitePages/acasa_default.aspx?id_inst=211",
    },
    {
        src: require('../images/jud-gherla.jpg'),
        title: 'Judecatoria Gherla',
        content: '​Judecătoria Gherla îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească. Judecătoria Gherla are sediul în municipiul Gherla, str. Bobâlna, nr. 55. Activitatea economică, financiară şi administrativă a Judecătoria Gherla este asigurată de departamentul economico-financiar şi administrativ din cadrul Tribunalului Cluj.',
        link: "http://portal.just.ro/235/SitePages/acasa_default.aspx?id_inst=235",
    },
    {
        src: require('../images/jud-huedin.jpg'),
        title: 'Judecatoria Huedin',
        content: 'Judecătoria Huedin îşi desfăşoară activitatea în baza Legii 304/2005, privind organizarea judecătorească. Judecătoria Huedin are sediul în Huedin, str. Avram Iancu, nr. 2. Activitatea economică, financiară şi administrativă a Judecătoria Huedin este asigurată de departamentul economico-financiar şi administrativ din cadrul Tribunalului Cluj.',
        link: "http://portal.just.ro/242/SitePages/acasa_default.aspx?id_inst=242",
    },
    {
        src: require('../images/jud-turda.jpg'),
        title: 'Judecatoria Turda',
        content: ' Judecătoria Turda îşi desfăşoară activitatea conform Legii 304/2004 privind organizarea judiciară, în baza Legii 303/2004 privind statutul magistraţilor, ambele modificate prin Legea 247/2005 privind reforma în domeniul proprietăţii şi justiţiei, Regulamentul de ordine interioară a instanţelor judecătoreşti aprobat prin Hotărârea nr. 159/24.09.2004 a CSM.',
        link: "http://portal.just.ro/328/SitePages/acasa_default.aspx?id_inst=328",
    },
];

export const linksImages = [
    {
        link: "http://www.just.ro/",
        icon: require("../images/links/ministerul_justitiei.PNG"),
        title: "Ministerul Justiţiei",
    },
    {
        link: "http://www.mpublic.ro/",
        icon: require("../images/links/ministerulPublic_link.png"),
        title: "Ministerul Public",
    },
    {
        link: "http://www.presidency.ro/",
        icon: require("../images/links/presedinteleRomaniei_link.png"),
        title: "Preşedintele României",
    },
    {
        link: "http://www.guv.ro/",
        icon: require("../images/links/GuvernulRomaniei_link.png"),
        title: "Guvernul României",
    },
    {
        link: "https://www.csm1909.ro/",
        icon: require("../images/links/csm_link.jpg"),
        title: "Consiliul Superior al Magistraturii",
    },
    {
        link: "https://www.ccr.ro/",
        icon: require("../images/links/ccr_link.png"),
        title: "Curtea Constituţională (CCR)",
    },
    {
        link: "http://www.baroul-cluj.ro/",
        icon: require("../images/links/BaroulCluj_link.jpg"),
        title: "Baroul Cluj",
    },
    {
        link: "https://www.icj-cij.org/",
        icon: require("../images/links/cij_link.png"),
        title: "Curtea Internaţională de Justiţiei",
    },
    {
        link: "http://www.echr.coe.int/",
        icon: require("../images/links/cedo_link.jpg"),
        title: "Curtea Europeană a Drepturilor Omului",
    },
    {
        link: "http://www.clr.ro/",
        icon: require("../images/links/CL_link.bmp"),
        title: "Consiliul Legislativ",
    },
    {
        link: "https://www.cmediere.ro/",
        icon: require("../images/links/Consiliuldemediere_link.JPG"),
        title: "Consiliul de Mediere",
    },
    {
        link: "http://www.scj.ro/",
        icon: require("../images/links/ministerul_justitiei.PNG"),
        title: "Înalta Curte de Casaţie şi Justiţie",

    },
    {
        link: "http://www.inm-lex.ro/",
        icon: require("../images/links/inm_link.jpg"),
        title: "Institutul Naţional de Magistratură",

    },
    {
        link: "http://www.grefieri.ro/",
        icon: require("../images/links/sng_link.png"),
        title: "Şcoala Naţională de Grefieri",

    },
    {
        link: "https://curia.europa.eu/jcms/jcms/j_6/ro/",
        icon: require("../images/links/CVRIA_link.png"),
        title: "C.V.R.I.A.",

    },];

export const informatiiPublice = [
    {
        titlu: "Cereri tip şi reclamaţii administrative",
        text: " Orice persoană poate solicita informaţii de interes public unei instituţii sau autorităţi publice, în condiţiile Legii nr. 544/2001 privind liberul acces la informaţiile de interes public. Cererea scrisă trebuie să cuprindă :- autoritatea sau instituţia publică căreia îi este adresată cererea - numele, prenumele şi semnătura solicitantului, precum şi  adresa la care se solicită primirea răspunsului.",
        folder: "Modele cereri",
        listOfDocs: [],
    },
    {
        titlu: "Anunţuri - Birou de Informare și Relații publice",
        text: "",
        folder: "Anunturi",
        listOfDocs: [],
    },
    {
        titlu: "Actele normative care reglementează organizarea şi funcţionarea Tribunalului Cluj",
        text: "Legea nr. 303/2004 şi 317/2004 de organizare judiciară, cu modificările şi completările ulterioare;Regulamentul de ordine interioară a instanţelor judecătoreşti, adoptat prin Hotărârea nr. 387 din 22 septembrie 2005 a Consiliului Superior al Magistraturii, modificat şi completat de Hotărârea CSM nr.1375 din 17 decembrie 2015, cu modificările şi completările ulterioare.",
        folder: "Acte normative",
        listOfDocs: [],
    },
    {
        titlu: "Activitatea desfăşurată de biroul de informare şi relaţii publice",
        text: " Biroul de informaţii publice a fost înfiinţat la data de 9 februarie 2004, conform Legii 544/2001 şi Normelor Metodologice de aplicare a legii, ocazie cu care a fost desemnată ca persoană responsabilă cu difuzarea informaţiilor de interes public un funcţionar public al Tribunalului Cluj. De asemenea, relaţia cu mass-media a fost asigurată de judecătorul delegat care a îndeplinit şi rolul de purtător de cuvânt. Odată cu intrarea în vigoare a noii Legi de organizare judiciară şi a Regulamentului de ordine interioară a instanţelor judecătoreşti, la data de 28 septembrie 2004, biroul a fost reorganizat sub denumirea de Biroul de informare şi relaţii publice, care îndeplineşte atribuţii privind difuzarea informaţiilor de interes public solicitate de reprezentanţii mass-media şi de către oricare altă persoană. Biroul este condus de un judecător care este şi purtător de cuvânt, având în componenţa sa şi un funcţionar public responsabil cu difuzarea informaţiilor publice.",
        folder: "",
        listOfDocs: [],
    }, {
        titlu: "Modalităţile de contestare a deciziei Tribunalul Cluj",
        text: "Împotriva refuzului explicit sau tacit al angajatului desemnat al Tribunalului de aplicare a prevederilor Legii nr.544/2001 privind liberul acces la informaţiile de interes public, cu modificările şi completările ulterioare, se poate depune reclamaţie la preşedintele Tribunalului Cluj în termen de 30 de zile de la luarea la cunoştinţă de către persoana lezată. Aceasta va fi soluţionată de Comisia de analiză privind încălcarea dreptului de acces la informaţiile de interes public. De asemenea, în cazul în care o persoană se consideră vătămată în drepturile sale prevăzute de Legea nr.544/2001, aceasta poate face plângere la secţia de contencios administrativ a tribunalului în a cărei rază teritorială domiciliază sau a Tribunalului Cluj. Potrivit Legii nr. 544/2001, plângerea se face în termen de 30 de zile de la data expirării termenului în care Tribunalul Cluj trebuia să răspundă cererii solicitantului. Termenul în care Tribunalul trebuie să răspundă este, în cazul comunicării informaţiilor solicitate, de 10 zile sau de 30 de zile de la înregistrarea cererii, în funcţie de dificultatea, complexitatea, volumul lucrărilor documentare şi de urgenţa solicitării. În cazul refuzului comunicării informaţiilor solicitate, termenul este de 5 zile de la înregistrarea cererii. În cazul în care Tribunalul răspunde în termenul de 30 de zile, este obligată să-l înştiinţeze despre aceasta pe solicitant în termen de 10 zile de la înregistrarea cererii.",
        folder: "",
        listOfDocs: [],
    },
    {
        titlu: "Lista documentelor de interes public",
        text: " În principiu, toate documentele produse şi/sau gestionate de Tribunal sunt de interes public, cu excepţia registrului de evidenţă a sesizărilor privind confirmarea şi autorizarea interceptărilor şi înregistrărilor pe bandă magnetică sau pe orice alt tip de suport, precum şi cu excepţia acelora care conţin informaţii exceptate de la liberul acces, cum sunt cele prevăzute de art.12 din Legea nr.544/2001 privind liberul acces la informaţiile de interes public.",
        folder: "",
        listOfDocs: [],
    },
    {
        titlu: "Informaţiile privind activitatea specifică a Tribunalul Cluj",
        text: " În principiu, toate documentele produse şi/sau gestionate de Tribunal sunt de interes public, cu excepţia registrului de evidenţă a sesizărilor privind confirmarea şi autorizarea interceptărilor şi înregistrărilor pe bandă magnetică sau pe orice alt tip de suport, precum şi cu excepţia acelora care conţin informaţii exceptate de la liberul acces, cum sunt cele prevăzute de art.12 din Legea nr.544/2001 privind liberul acces la informaţiile de interes public.",
        folder: "",
        listOfDocs: [],
    },
    {
        titlu: "Atribuţiile judecătorilor",
        text: " Atribuţii jurisdicţionale: de a soluţiona cauzele aflate în competenţa de judecată a Tribunalului Cluj. Atribuţii administrative: acelea care, potrivit legii, vizează buna desfăşurare a activităţii administrative a instanţei (executări penale şi civile, analiza practicii judiciare, relaţia cu mass-media şi relaţiile publice, etc). Preşedintele, vicepreşedinţii şi Colegiul de conducere al tribunalului exercită atribuţiile de conducere a Tribunalului Cluj, iar preşedinţii de secţie asigură conducerea celor 3 secţii ale Tribunalului - a Secţiei civile, a Secţiei Mixte de contencios administrativ şi fiscal, litigii de muncă şi asigurări sociale şi a Secţiei penale şi de minori. De asemenea, preşedintele şi vicepreşedinţii au, după caz, atribuţii de coordonare sau de control a activităţii instanţelor aflate în raza de competenţă a Tribunalului Cluj.",
        folder: "",
        listOfDocs: [],
    },
    {
        titlu: "Atribuţiile compartimentelor din cadrul Tribunalul Cluj",
        text: " Atribuţii jurisdicţionale: de a soluţiona cauzele aflate în competenţa de judecată a Tribunalului Cluj. Atribuţii administrative: acelea care, potrivit legii, vizează buna desfăşurare a activităţii administrative a instanţei (executări penale şi civile, analiza practicii judiciare, relaţia cu mass-media şi relaţiile publice, etc). Preşedintele, vicepreşedinţii şi Colegiul de conducere al tribunalului exercită atribuţiile de conducere a Tribunalului Cluj, iar preşedinţii de secţie asigură conducerea celor 3 secţii ale Tribunalului - a Secţiei civile, a Secţiei Mixte de contencios administrativ şi fiscal, litigii de muncă şi asigurări sociale şi a Secţiei penale şi de minori. De asemenea, preşedintele şi vicepreşedinţii au, după caz, atribuţii de coordonare sau de control a activităţii instanţelor aflate în raza de competenţă a Tribunalului Cluj.",
        folder: "",
        listOfDocs: [],
    },
    {
        titlu: "Documentele produse şi/sau gestionate de Tribunalul Cluj",
        text: " Atribuţii jurisdicţionale: de a soluţiona cauzele aflate în competenţa de judecată a Tribunalului Cluj. Atribuţii administrative: acelea care, potrivit legii, vizează buna desfăşurare a activităţii administrative a instanţei (executări penale şi civile, analiza practicii judiciare, relaţia cu mass-media şi relaţiile publice, etc). Preşedintele, vicepreşedinţii şi Colegiul de conducere al tribunalului exercită atribuţiile de conducere a Tribunalului Cluj, iar preşedinţii de secţie asigură conducerea celor 3 secţii ale Tribunalului - a Secţiei civile, a Secţiei Mixte de contencios administrativ şi fiscal, litigii de muncă şi asigurări sociale şi a Secţiei penale şi de minori. De asemenea, preşedintele şi vicepreşedinţii au, după caz, atribuţii de coordonare sau de control a activităţii instanţelor aflate în raza de competenţă a Tribunalului Cluj.",
        folder: "",
        listOfDocs: [],
    },];

export const conducere = [
    {
        sectia: "Conducerea Tribunalul Cluj",
        personal: [
            {
                title: "Preşedinte instanţă:",
                team: ["SELEȘIU Ana Sorina"],
            },
            {
                title: "Vicepreşedinţi",
                team: [
                    "FĂRCAŞ-HÎNGAN Georgiana Rodica", 
                    "GUZU Rodica Elisabeta"
                ],
            },
            {
                title: "Colegiul de Conducere",
                team: [
                    "SELEŞIU Ana Sorina - Președinte",
                    "DANILEŢ Cristi Vasilică - Judecator – membru ales",
                    "GAGA Ioan - Judecator – membru ales",
                    "GUZU Rodica - Judecător– membru ales",
                    "JACOTĂ Cătălin - Judecător – membru ales",
                    "ONEŢ Georgeta - Judecător – membru ales",
                    "TRESTIAN Simona - Judecător – membru ales"],
            },
            {
                title: "Prim grefier",
                team: ["KOZMA Daniela"],
            }
        ]
    }
];
export const personalTribunal1 = [
    {
        sectia: "Secția Civilă",
        personal: [
            {

                title: "Judecatori:",
                sef: "Preşedinte secţie: Luca Emeşe",
                team: [
                    "Balint Camelia",
                    "Bolchiş Florina-Sanda",
                    "Cimbrudean Corina-Anca",
                    "Guzu Rodica Elisabeta - Vicepreşedinte",
                    "Doica Alin-Florin",
                    "Ghişoiu Oana Raluca",
                    "Jacotă Cătălin",
                    "Oncică Sanislav Marcela",
                    "Seleşiu Ana Sorina -Preşedinte instanţă",
                    "Taşcă Dan-Ioan",
                    "Tatu Claudia-Oana",
                    "Tatu Dorin ",
                    ],
            },
            {
                title: "Grefieri",
                sef: "Grefier şef secţie: Şofron Simona - Ioana",
                team: [
                    "Andresi Olimpia",
                    "Bărăian Ioana Maria - detaşată de la Judecătoria Turda",
                    "Boţioc Alina-Pompilia",
                    "Ciceu Oana Raluca",
                    "Coman Livia - suspendare, la cerere",
                    "Curuţiu Elvira",
                    "Deac Aniela - suspendare, la cerere",
                    "Duma Ioana Daniela - suspendare, la cerere",
                    "Herişanu Claudia",
                    "Iepan Alina-Alexandrina - perioadă determinată",
                    "Miclea Laura",
                    "Petruş Gabriela",
                    "Pop Alina",
                    "Ţifrea Cristina",
                    "Șofron Claudia",
                    "Voila Andreea Roxana",],
            }]
    },

    {
        sectia: "Secţia Penală",
        personal: [
            {
                title: "Judecători",
                sef: "Preşedinte secţie : Ţopan Alina Camelia",
                team: [
                    "Boiciuc Ioana Nora",
                    "Cociş Liliana-Anişoara",
                    "Danileţ Vasilică Cristi",
                    "Fărcaş-Hîngan Georgiana Rodica - Vicepresedinte",
                    "Ilieş Ariana-Lăcrimioara",
                    "Lupea Ioan-Marius",
                    "Mornăilă Ramona",
                    "Trestian Simona",
                    ],
            },
            {

                title: "Grefieri",
                sef: "Grefier şef secţie: Călugăr Maria-Diana",
                team: [
                    "Babaş Lidia",
                    "Blăjan Camelia-Luminiţa",
                    "Brie Alina",
                    "Borbely Malvin - suspendare, de drept",
                    "Burnete Daiana-Andra - suspendare, de drept",
                    "Dan Andreea",
                    "Doboş Maria",
                    "Dumitru Dana-Maria - perioadă determinată",
                    "Miron Carmen-Gabriela",
                    "Moldovan-Briciu Maria Cristina",
                    "Oneş Dan Paul",
                    "Opriș Anamaria-Rodica – perioadă determinată",
                    "Stîngaci Mirela",],
            }]

    }, {
        sectia: "Secţia mixtă de contencios administrativ, conflicte de muncă şi asigurări sociale",
        personal: [
            {
                title: "Judecători",
                sef: "Preşedinte secţie: Botiş Vasile Marius",
                team: [
                    "Aldea Ana",
                    "Belean Emil",
                    "Bujor Maria Francesca",
                    "Cătuna Daniela",
                    "Gaga Ioan",
                    "Groza Anca Maria",
                    "Nan Alexandrina Ioana",
                    "Noja Carmen-Simona",
                    "Oneţ Georgeta Olimpia",
                    "Păcurar Victoriţa-Paula",
                    "Rad Anca Maria",
                    "Ramirez-Molina Ioana Liliana ",
                    "Tanţău Rodica",
                    "Trofin Monica",
                    "Urs Petru",
                ],
            },
            {
                title: "Asistenţi judiciari",
                team: [
                    "Câmpean Barbu-Alin",
                    "Popa Carmen Ecaterina",
                    "Roşu Ioan",
                    "Şter Adrian",
                ],
            },
            {
                title: "Grefieri",
                sef: "Grefier şef secţie:Lung Oana-Raluca",
                team: [
                    "Câmpean Liliana",
                    "Cioban Lucian",
                    "Clapa Mariana ",
                    "Dascăl (Oltean) Roxana Simona",
                    "Dediu Mariana",
                    "Fracea Roxana-Ioana",
                    "Matyaş Gabriela",
                    "Pintican Gabriela",
                    "Pârv Fabia",
                    "Popa Ioana - Marinela",
                    "Raț Larisa – detașată la Tribunalul Specializat Cluj",
                    "Stana Cristina",
                    "Tişe Anamaria Dorina",
                    "Tripon Corina",
                    "Turc Corina",
                    "Ţăruş Alina Mădălina",
                    "Vinczeller Anamaria",
                ],
            }
        ]
    }, {
        sectia: "Alte compartimente",
        personal: [
            {
                title: "Grefier statistician",
                team: ["Pop Adina Crina"]
            },
            {
                title: "Grefier cu atribuţii de aplicare a apostilei",
                team: ["Gherman Adriana"]
            },
            {
                title: "Grefieri arhivari şi registratori:",
                sef: "Arhivar şef: Manea Nicoleta",
                team: [
                    "Bumar Ionela Aurora",
                    "Crişan Rodica-Claudia",
                    "Dărăban Gabriela-Ioana",
                    "Felecan Ana-Camelia - detașată la Curtea de Apel Cluj",
                    "Ziman Marin",
                ],
            },
            {
                title: "Agent procedural",
                team: ["Babaş Laurenţiu"],
            },
            {
                title: "Personal specialitate informatică",
                sef: "Specialist IT şef - Popa Dorin Octavian",
                team: [
                    " Tămaş Daniel-Riian",
                    " Miron Cristian",
                    " Murariu Ioana Mariana",
                    " Pop Ciprian Isaia",
                    " Traica Adina Mihaela",
                ]
            },
            {
                title: "Birou expertize judiciare",
                team: ["Oprea Raluca",],
            },
            {
                title: "Birou de informare şi relaţii cu publicul",
                team: ["Birău Verginica Maria",],
            },
            {
                title: "Conducători auto",
                team: [
                    "Felecan Ioan",
                    "Lung Horatiu Mihai",
                    "Mureşan Alexandru",
                    "Rus Ovidiu Nelu",
                ]
            },
            {
                title: "Aprod",
                team: [
                    "Hanuschi Violeta",
                    "Iancu Marta",
                    "Mureşan Ioana-Delia",
                    "Şerban Victoria",
                ],
            },
            {
                title: "Grefier documentarist ",
                team: ["Birău Verginica Maria – cu atribuţii la Biroul de Informare şi Relaţii cu Publicul",],
            },
           
            {
                title: " Birou de informare şi relaţii cu publicul",
                team: ["Păran Olivia Giulia – cu atribuţii la D.E.F.A",],
            },
            {
                title: "Manager Economic",
                team: ["Coța Gabriela",],
            },
            {
                title: "Compartimentul economic, financiar și adminstrativ",
                team: [
                    "Alb Luminița",
                    "Dinea Ancuţa",
                    "Drăgan Ioana",
                    "Dumitrescu Mihaela",
                    "Ferenţ Marcela Ofelia",
                    "Nica Claudia-Adela",
                ],
            },
            {
                title: "Birou expertize judiciare",
                team: [
                    "Rus Cristina Andreea– suspendare, la cerere",
                    "Oprea Raluca Anamaria",
                ]
            },
            {
                title: "Personal contractual - Merceolog",
                team: [
                    "Ţar Voicu Stelian",
                ],
            },
            {
                title: "Personal contractual - Muncitori întreţinere",
                team: [
                    "Dumitraş Lucian Ioan",
                    "Roman Dănuţ",
                ],
            },
        ],
    }
];

export const program = [{
    where: "Programul de lucru al instituţiei:",
    hours: "Luni - Vineri între orele 08:00 - 16:00;"
},
{
    where: "Registratură(parter, camera 24A) şi Arhivă(parter, camera 24B):",
    hours: "Luni - Vineri între orele 8:00 - 12:00;"
}, {
    where: "În perioada vacantei judecatoresti (01.07.-31.08.) program Registratura şi Arhiva:",
    hours: "Luni, Miercuri şi Joi între orele 09:00 - 11:00;",
}];

export const massMedia = [
    {
        functie: "Purtător de cuvânt:",
        nume: "Judecător SIMONA TRESTIAN",
        email: "simona.sulea@just.ro",
        phone: "0264596110"
    }];

export const email = [
    {
        locatie: "Registratură:",
        adresa: "tr-cluj-reg@just.ro"
    },
    {
        locatie: "Biroul Expertize:",
        adresa: "tr-cluj-blej@just.ro "
    }];

export const faxuri = [
    {
        locatie: "Cabinet Preşedinte:",
        adresa: "0264-595844"
    },
    {
        locatie: "Serviciu Contabilitate:",
        adresa: "0264-431965",
    }];

export const infoUtile = [
    {
        title: 'Protecția datelor',
        icon: require("../images/icons/gdpr1.png"),
        locatie: "/gdpr",
    },
    {
        title: ' Calculator taxe',
        icon: require("../images/icons/calculator.png"),
        locatie: "/taxe",
    },
    {
        title: ' Legalizare şi definitivare',
        icon: require("../images/icons/notary.png"),
        locatie: "/legalizare",
    },
    {
        title: 'Asistenţă judiciară',
        icon: require("../images/icons/asistenti.png"),
        locatie: "https://curteadeapelcluj.ro/asistenta%20judciara.html",

    },
    {
        title: 'Medierea şi Tabloul mediatorilor',
        icon: require("../images/icons/book.png"),
        locatie: "https://curteadeapelcluj.ro/Informatii%20utile/Medierea.pdf",

    },
    {
        title: ' Apostilă',
        icon: require("../images/icons/writing.png"),
        locatie: "InfoUtile/apostila.pdf",
    },
    {
        title: ' Traducători autorizaţi',
        icon: require("../images/icons/language.png"),
        locatie: "http://old.just.ro/MinisterulJusti%C8%9Biei/Listapersoanelorautorizate/Interpretisitraducatoriautorizati/tabid/129/Default.aspx",
    },
    {
        title: 'Liste experţi',
        icon: require("../images/icons/seo-expert.png"),
        locatie: "http://old.just.ro/MinisterulJusti%C8%9Biei/Listapersoanelorautorizate/Expertijudiciari/tabid/160/Default.aspx",
    },
    {
        title: 'Tabloul Avocaţilor',
        icon: require("../images/icons/asistenti.png"),
        locatie: "http://www.baroul-cluj.ro/Avocati.aspx?t=AvDefinitiv",
    },];