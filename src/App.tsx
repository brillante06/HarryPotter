import React from 'react';
import logo from './logo.svg';
import CardList from './components/CardList'
import Card from './components/Card'


const App: React.FC = () => {
  return <Card name="hello" image="http://hp-api.herokuapp.com/images/harry.jpg" actor="HarryPotter"/>;
};

export default App;
