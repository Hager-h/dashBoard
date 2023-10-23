import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Dash from './pages/Dashboard/Dash';
import Team from './pages/Team/Team';
import Contacts from './pages/Contacts/Contacts';
import Form from './pages/Form/Form';
import Faq from './pages/Faq/Faq';
import Line from './pages/Line/Line';
import Geography from './pages/Geography/Geography';
import Calendar from './pages/Calendar/Calendar';
import Invoices from './pages/Invoices/Invoices';
import  Bar  from "./pages/Bar/Bar"
import PieChart from './pages/Pie/PieChartt';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dash />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/form" element={<Form />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/line" element={<Line />} />
      <Route path="/pie" element={<PieChart />} />
      <Route path="/geography" element={<Geography />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);