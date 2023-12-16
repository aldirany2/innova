import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { EbookPage } from './pages/ebookPage';
import MainNavbar from './Components/navbar/navbar';
import { Footer } from './Components/footer/footer';

import ProductProvider from "./context/productContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider >
    <Router>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<EbookPage />} />
        <Route path='/productDetails' element={<App />} />
      </Routes>
      <Footer />
    </Router>
  </ProductProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
