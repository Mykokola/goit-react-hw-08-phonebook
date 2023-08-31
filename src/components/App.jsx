import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from './Contacts/Contacts';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { HomePage } from './Homepage/HomePage';
import { Layout } from './Layout/Layout';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage />} />
      <Route
        path="login"
        element={
          <RestrictedRoute
            redirectTo="/contacts"
            component={<Login></Login>}
          ></RestrictedRoute>
        }
      >
        {' '}
      </Route>
      <Route
        path="register"
        element={
          <RestrictedRoute
            redirectTo="/contacts"
            component={<Register></Register>}
          ></RestrictedRoute>
        }
      ></Route>
      <Route
        path="contacts"
        element={
          <PrivateRoute
            redirectTo="/login"
            component={<Contacts></Contacts>}
          ></PrivateRoute>
        }
      />
      </Route>
    </Routes>
  );
};
export default App;
