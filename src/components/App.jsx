import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Contacts } from './Contacts/Contacts';
import { Register } from './Register/Register';
const App = () => {

  return (
    <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='contacts ' element={<Contacts/>}/>
    </Routes>
  );
};
export default App;
