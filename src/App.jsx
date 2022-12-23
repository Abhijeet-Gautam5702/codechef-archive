import React from "react";
import Card from "./Card";
import Header from "./Header";
import Hero from "./Hero";
import { fetchFromStorage } from "./logic";
import "./App.css";

function App() {
  const data = fetchFromStorage();

  const cards = data.map((problem) => {
    return (
      <Card
        key={problem.id}
        id={problem.id}
        title={problem.title}
        link={problem.link}
      />
    );
  });

  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <div className="prblm-list">{cards}</div>
    </div>
  );
}

export default App;
