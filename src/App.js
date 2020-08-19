import React, {Fragment} from 'react';
import './App.css';


//components
import InputRecord from "./components/InputRecord"
import ListRecords from "./components/ListRecords"


function App() {
  return  (
    <Fragment>
      <div className="container">
        <InputRecord />
        <ListRecords />
      </div>
    </Fragment>
  );
}

export default App;
