import React from "react";
import { Router } from "react-router";
import { ToastContainer } from 'react-toastify';

import "./styles/toast.css";

import history from "./services/history";

import Routes from "./routes";

export default function App() {
  return (
    <Router history={history}>
      <Routes />
      <ToastContainer autoClose={3000} />
    </Router>
  )
}