import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import "./app/globals.css";

import Home from "./pages/Home";
import Key from "./pages/Key";
import Privacy from "./pages/Privacy";
import TOS from "./pages/TOS";
import MileniumPreview from "./pages/MileniumPreview";

const routerBaseName = import.meta.env.BASE_URL;

function App() {
  return (
    <BrowserRouter basename={routerBaseName}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/key" element={<Key />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<TOS />} />
        <Route path="/milenium-preview" element={<MileniumPreview />} />
      </Routes>
      <Toaster richColors />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
