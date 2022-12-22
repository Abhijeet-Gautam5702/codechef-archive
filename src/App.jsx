import React from "react";
import Card from "./Card";
import problemData from "./problemData";
import Header from "./Header"
import Hero from "./Hero"
import "./App.css";

function App() {
  const cards = problemData.map((problem) => {
    return <Card key={problem.id} title={problem.title} link={problem.link} />;
  });
  return (
    <div className="wrapper">
        <Header/>
        <Hero/>
        <div className="prblm-list">{cards}</div>
    </div>
  );
}
export default App;
