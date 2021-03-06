import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Title from '../components/Header/HeaderTitlePage';
import Anunt from "../components/anunt";
import axios from 'axios';
import InfoList from '../components/infoPubliceList';


class InfoPublice extends Component {
    state = {
        items: [],
        folders: [],
        informatiiPublice:[{
                titlu: "",
                text: "",
                folder: "",
                listOfDocs: []
            }]
    }

    componentWillMount(){
        
        fetch("/infoPubliceJson")
        .then((response) => response.json())
        .then((findresponse)=> 
                this.setState({
                    informatiiPublice : findresponse.informatiiPublice
                })
        )
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        axios
            .get(`/getFiles`, {
                params: {
                    folderName: "PDFs/Informatii publice"
                }
            })
            .then(res => {
                let i = 0;
                
                /* Foreach folder from res, requeat all pdf files  */
                for (i = 0; i < res.data.length; i++) {
                    let year = res.data[i];

                    axios
                        .get(`/getFiles`, {
                            params: {
                                folderName: "PDFs/Informatii publice/" + year
                            }
                        })
                        .then(res2 => {
                            let m = res2.data.length - 1;
                            let object2;
                            let object3 = [];

                            /* Extract data field from pdf filename */
                            for (m; m >= 0; m--) {
                                let indexStop = res2.data[m].indexOf('.pdf');
                                let titluDoc = res2.data[m].substring(0, indexStop);

                                object2 = Object.assign({ titlu: titluDoc, locatie: "Informatii publice/" + year + "/" + res2.data[m] });
                                object3.push(object2);
                            }

                            /** Add created object to {this.state.folders} */
                            object3.sort((a, b) => new Date(b.date) - new Date(a.date));
                           
                            this.state.informatiiPublice.map((item)=>{
                                if(item.folder === year){
                                     item.listOfDocs.push.apply(item.listOfDocs,object3); 
                                }
                                return true;
                            })
                            this.setState({folders: []});
                            
                            
                        })
                        .catch(e => {
                            console.log("Eroare la deschiderea fișierului", e);
                        });
                }
            })
            .catch(e => {
                console.log("Eroare la deschiderea fișierului", e);
            });
    }

    componentWillUnmount(){
        this.state.informatiiPublice.map((item)=>{
            item.listOfDocs = [];
            return true;
        })
    }

    render() {
        const listaFinala = this.state.informatiiPublice.map((item, index) => {
            if(item.folder !== "")
            {
                return (
                    <Anunt
                    key={index}
                    icon={require("../images/icons/law2.png")}
                    altText={"hotarari"}
                    titlu={item.titlu}
                    text={item.text}
                    docs={item.listOfDocs}
                    expanded={true}
                    />
                );

            }
            else{
                return (
                    <InfoList index={index}
                        titlu={item.titlu}
                        text={item.text}
                    />
                )
            }
           
            });

        return (
            <React.Fragment>
                <Title
                    title="Informații Publice"
                    page="Informații Publice"
                    subpage="Informații"
                    breadcrumbs={true}
                />

                <div className="my-5 container">
                    <List component="nav">

                    {listaFinala}
                    </List>
                </div>
            </React.Fragment>
        );
    }
}

export default InfoPublice;


        /* Create an object and append to state */
        /* Extract data field from pdf name */
        /*                     let i = 0;
                            var list = [];
                            for (i = 0; i < res.data.length; i++) {
            
                               
                                let indexStop = res.data[i].indexOf('.pdf');
                                let titluDoc = res.data[i].substring(0, indexStop);
                                const object = Object.assign({ titlu: titluDoc, locatie: "Informatii publice/Birou de informare si relaţii publice/" + res.data[i] });
                                list.push(object);
                            }
            
        
                            const itemObject = Object.assign({ titlu: "Birou de Informare și Relații publice", listOfDocs: list });
                            this.setState({ items: [...this.state.items, itemObject] }); */

/*  {informatiiPublice.map((item, index) => {
        if (item.folder !== "") {
            console.log("Folderul nu e null:(din contants) ", item.folder);
            this.state.folders.map((dir, index) => {
                if (dir.folder === item.folder) {
                    console.log("Folderele sunt egale:(din state) ", dir.folder);
                    return (
                        <Anunt
                            key={index}
                            icon={require("../images/icons/law2.png")}
                            altText={item.text}
                            titlu={item.titlu}
                            docs={dir.docs}
                            expanded={true}
                        />
                    )
                }
            })
        }
        else {
            return (
                <InfoList index={index}
                    titlu={item.titlu}
                    text={item.text}
                />
            )
        }
})} */