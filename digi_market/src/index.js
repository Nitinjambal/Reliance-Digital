import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './Context/AuthContextProvider';
export const server="https://backend-for-reliance-digital-app.onrender.com/api/v1"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ChakraProvider>
      <BrowserRouter>
         <AuthContextProvider>
            <App />
         </AuthContextProvider>
      </BrowserRouter>
   </ChakraProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
