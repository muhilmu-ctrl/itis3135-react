import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Introduction from './Introduction.jsx'
import Contract from './Contract.jsx';
import Introductions from './Introductions.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/introductions" element={<Introductions/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
