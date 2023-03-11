import React from "react";
import CardLayout from "../card/Card";
import Filter from "../filter/Filter";

function App() {
  return (
    <div className='container'>
      <h1 className='container__title'>Redux app</h1>
      <Filter />
      <div className='card'>
        <CardLayout />
        <CardLayout />
        <CardLayout />
        <CardLayout />
        <CardLayout />
        <CardLayout />
        <CardLayout />
      </div>
    </div>
  );
}

export default App;
