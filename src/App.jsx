import React from "react";
import Card from "./Card";
import Header from "./Header";
import Hero from "./Hero";
import { fetchFromStorage, updateStorage } from "./logic";
import "./App.css";

function App() {
  //set state as data fetched from local storage
  const [data, setData] = React.useState(fetchFromStorage());

  //handle click event : delete card element
  function deleteCardElement(id) {
    const newData = data.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    //set the newState
    setData((prevData) => newData);
    //update localStorage with the newData
    updateStorage(newData);
  }

  //handle click event : delete all cards
  function clearData() {
    setData([]);
    localStorage.setItem("problemData", JSON.stringify([]));
  }

  //handle click event : save new card
  function saveCardElement(newItem) {
    const newData = [newItem, ...data];
    setData((prevData) => newData);
    // update local storage
    updateStorage(newData);
  }

  //create cardElements array containing Card components
  const cardElements = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        handleDelete={() => deleteCardElement(item.id)}
      />
    );
  });

  return (
    <div className="wrapper">
      <Header />
      <Hero handleSave={saveCardElement} handleClear={clearData} />
      <div className="prblm-list">{cardElements}</div>
    </div>
  );
}

export default App;
