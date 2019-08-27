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
        locatie: "InfoUtile/Traducatori Autorizati Cluj.pdf",
    },
    {
        title: 'Experţi judiciari',
        icon: require("../images/icons/seo-expert.png"),
        locatie: "/experti",
    },
    {
        title: 'Tabloul Avocaţilor',
        icon: require("../images/icons/asistenti.png"),
        locatie: "http://www.baroul-cluj.ro/Avocati.aspx?t=AvDefinitiv",
    },];