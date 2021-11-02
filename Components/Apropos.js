import React from 'react';
import {Dimensions, TouchableOpacity, Text, StyleSheet, View} from 'react-native';


class Apropos extends React.Component {

  constructor(props){
    super(props)
  }

  _revenir(){
       this.props.navigation.navigate("PageAccueil");

  }

  render(){

    return (

          <View style={styles.container}>
                <h2>Ceci est une page de test A propos de Tanora Web</h2>
                <h3>lorem  ipsum ...</h3>
                <TouchableOpacity onPress={() => this._revenir()}>
                    <Text>Revenir en page d'accueil </Text>
                </TouchableOpacity>
          </View>

    )
  }
}
/*  //   */
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'

  },


})

export default Apropos
