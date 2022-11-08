import logo from './logo.svg';
import './App.scss';
import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import indexRoutes from "./routes/index";

function App() {
  return (
    <div className="App">
      <Router>
          <Suspense>
            <Routes>
              {indexRoutes.map((prop, key) => {
                return (
                  <Route
                    path={prop.path}
                    key={key}
                    element={prop.component}
                  ></Route>
                );
              })}
              </Routes>
          </Suspense>
        </Router>
    </div>
  );
}

export default App;
