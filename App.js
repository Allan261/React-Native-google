import React from 'react';
import Accueil from './Components/Accueil';
import Navigation from "./Navigation/Navigation";
import {Text} from 'react-native';

class App extends React.Component {

  constructor(props){
    super(props)

  }

  render(){
    return  <Navigation />
  }

};

export default App
