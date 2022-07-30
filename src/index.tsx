import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from 'react-router-dom';
import { client } from "./config/db"
import AuthContext from "./context/AuthContext";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <AuthContext>
        <App />
      </AuthContext>
    </BrowserRouter>
  </ApolloProvider>
);
