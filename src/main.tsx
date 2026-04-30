import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import "./app/globals.css";

import Home from "./pages/Home";
import Key from "./pages/Key";
import MileniumPreview from "./pages/MileniumPreview";
import Zorvex from "./pages/zorvex";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/key" element={<Key />} />
        <Route path="/milenium-preview" element={<MileniumPreview />} />
        <Route path="/zorvex" element={<Zorvex />} />
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
