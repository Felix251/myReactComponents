import React, { useState } from 'react';
import './App.css';
import { Modal } from './components/modal';
import { IoMdWallet } from "react-icons/io";

import { Chart } from './components/Chart';


function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let obj = {
              "Domaine":"Dm_001111",
              "Filiere":"Fil123456",
              "Activite":"Act123456",
              "Type d'agrement":"Agr_00009999",
              "Code agent":"CA12345678900000",
              "Type de credit":"Cred_1234567",
              "Code de la categorie":"CDC_1112000",
              "Code de la zone geographique":"CZG_1234567",
              "Montant minimum credit":"250 000cfa",
              "Montant maximum credit":"1 000 000cfa"
            }
  
  return (
    <div className="App" style={{backgroundColor:'#ededed'}}>
      <button onClick={() => setIsOpen(true)}>open modal</button>
      {isOpen ? 
        <Modal title='DETAILS PORTEFEUILLE' obj={obj} setIsOpen={setIsOpen} icon={<IoMdWallet color='#7e7e7e' size={35}/>}/> : null
      }
      <Chart/>
    </div>
  );
}

export default App;
