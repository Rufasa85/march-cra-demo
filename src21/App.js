import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Joe from './components/Joe';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Joe />
      <Navbar />
      <Card bg="green"/>
      <Card bg="yellow"/>
      <Card bg="#c0ffee"/>
    </div>
  );
}

export default App;
