import "./App.css";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWSAPP
  const [progress, setProgress] = useState(0)
    return (
      <>
        {" "}
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                 setProgress={setProgress} key="general"
                  pageSize={pageSize} apiKey={apiKey}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                 setProgress={setProgress} key="business"
                  pageSize={pageSize} apiKey={apiKey} 
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                 setProgress={setProgress} key="entertainment"
                  pageSize={pageSize} apiKey={apiKey} 
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                 setProgress={setProgress} key="general"
                  pageSize={pageSize} apiKey={apiKey} 
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                 setProgress={setProgress} key="health"
                  pageSize={pageSize} apiKey={apiKey}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                 setProgress={setProgress} key="science"
                  pageSize={pageSize} apiKey={apiKey} 
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                 setProgress={setProgress} key="sports"
                  pageSize={pageSize} apiKey={apiKey} 
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                 setProgress={setProgress} key="technology"
                  pageSize={pageSize} apiKey={apiKey} 
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
export default App;