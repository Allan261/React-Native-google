import React from 'react';
import {Button, Image } from 'react-native';
import { NavigationActions, createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Accueil from '../Components/Accueil';
import Apropos from '../Components/Apropos';

const GCAccueilnavigation = createStackNavigator({
  LoginVue : {
    screen:Accueil,
    navigationOptions : {
      headerShown: false,
    }
  }

});

const GCAproposnavigation = createStackNavigator({
  LoginVue : {
    screen:Apropos,
    navigationOptions : {
      headerShown: false,
    }
  }

});



const AppContainer = 	createSwitchNavigator(
		{
			PageAccueil: GCAccueilnavigation,
      Apropos: GCAproposnavigation,
		},
		{
			initialRouteName: "PageAccueil",
		}
	);


export default createAppContainer(AppContainer);
