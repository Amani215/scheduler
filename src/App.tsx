import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Notifications from "./Components/Notifications";
import Timetable from "./Components/Timetable";

function App() {
  return (
    <div className="App">
      <Header />
      <div className=" container">
        <div className="columns">
          <div className="column">
            <Timetable />
          </div>
          <div className="column is-one-quarter ">
            <Notifications />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
