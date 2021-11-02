import React from 'react';
import {Dimensions, TouchableOpacity, Alert, Image, StyleSheet, View, TextInput, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Row, Col } from 'react-materialize';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

class Accueil extends React.Component {

  constructor(props){
    super(props)
  }

  _apropos(){
       this.props.navigation.navigate("Apropos");

  }

  render(){

    return (

          <View style={styles.container}>
            <View style={styles.entete}>
              <Text style={{textAlign:'right'}}>
                  <TouchableOpacity style={{marginRight:10}}>
                      <Text>Gmail</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight:20}}>
                      <Text>Images</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight:25}}>
                      <Icon name="th" size={20} color="#999" />
                  </TouchableOpacity>
                  <TouchableOpacity  style = {{ alignItems: 'center', paddingTop:10, marginTop:5,marginRight:20 }} >
                        <Image source={require('../assets/moi.jpg')}  style = {{ width: 32, height: 32, borderRadius: 50}}/>
                  </TouchableOpacity>
              </Text>

            </View>
            <View style={styles.corps}>
              <Row style={{marginTop:"11%"}}>
                <Col l={12} m={12} s={12}>
                    <Image source={require('../assets/google.png')} style = {{ width: 272, height: 92, alignItems: 'center' }} />
                </Col>
              </Row>
              <Row style={{width:"30.5%", marginTop:12}}>
                <Col l={1} m={1} s={1} style={{marginRight:"-5px"}}>
                  <Icon name="search" size={18} color="#9aa0a6" style={styles.iconSearch} />
                </Col>
                <Col l={10} m={10} s={10} >
                    <TextInput style={{height:35,
                    width: "105%",
                    borderLeftColor: 'transparent',
                    borderTopColor: '#ccc',
                    borderBottomColor: '#ccc',
                    borderRightColor: 'transparent',
                    borderWidth: 1}} />
                </Col>
                <Col l={1} m={1} s={1} style={{marginLeft:"-5px", marginTop:"-9px"}}>
                  <TouchableOpacity>
                      <Icon name="microphone" size={18} color="#1877F2" style={styles.iconMicro} />
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row style = {{ marginTop:35,marginLeft:"42%",color:'#000'}}>
                <Col l={6} m={6} s={12} >
                    <TouchableOpacity style={{width: 150, height: 36, backgroundColor:"#f8f9fa"}}>
                        <Text style = {{color:"#000", textAlign:"center", marginTop:5 }}>Recherche Google</Text>
                    </TouchableOpacity>

                </Col>
                <Col l={6} m={6} s={12} >
                    <TouchableOpacity style={{width: 150, height: 36, backgroundColor:"#f8f9fa", marginLeft:10}}>
                        <Text style = {{color:"#000", textAlign:"center", marginTop:5  }}>J'ai de la chance</Text>
                    </TouchableOpacity>
                </Col>
             </Row>

            </View>
            <View style={styles.pied}>
              <View style={{textAlign:'left', height:50, borderBottomColor: '#dadce0',borderBottomWidth: 1}}>
                  <Text style={{marginTop:15, marginLeft:30, color:'#70757a'}}>Madagascar </Text>
              </View>
              <View style={{height:40}}>
                  <Row style={{marginTop:15, marginLeft:30, marginRight:30, color:'#70757a', width:"100%"}}>
                      <Col l={6} m={6} s={12} >
                          <Row>
                              <Col l={1} m={4} s={12}>
                                  <TouchableOpacity onPress={() => this._apropos()}>
                                      <Text>A propos </Text>
                                  </TouchableOpacity>
                              </Col>
                              <Col l={1} m={4} s={12}>
                                  <TouchableOpacity >
                                    <Text >Publicité </Text>
                                  </TouchableOpacity>
                              </Col>
                              <Col l={2} m={4} s={12}>
                                  <TouchableOpacity >
                                      <Text >Entreprise </Text>
                                  </TouchableOpacity>
                              </Col>
                              <Col l={4} m={12} s={12}>
                                  <TouchableOpacity >
                                      <Text >Comment fonctionne la recherche Google ? </Text>
                                  </TouchableOpacity>
                              </Col>
                          </Row>

                      </Col>
                      <Col l={3} m={3} s={12} > </Col>
                      <Col l={3} m={3} s={12} >
                          <Col l={4} m={4} s={12}>
                              <TouchableOpacity >
                                <Text >Confidentialité </Text>
                              </TouchableOpacity>
                          </Col>
                          <Col l={4} m={4} s={12}>
                              <TouchableOpacity >
                                <Text >Conditions </Text>
                              </TouchableOpacity>
                          </Col>
                          <Col l={4} m={4} s={12}>
                              <TouchableOpacity >
                                <Text >Paramètres </Text>
                              </TouchableOpacity>
                          </Col>

                      </Col>
                  </Row>
              </View>
            </View>
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
  entete: {
    height:"50px",
    width:'100%',
    backgroundColor :"#fff"

  },
  corps: {
    flex: 1,
    alignItems: 'center',
    width:'100%',
    backgroundColor :"#fff"
  },
  pied: {
    flex: 1,
    justifyContent: 'center',
    height:100,
    width:'100%',
    position:"absolute",
    bottom:0,
    backgroundColor :"#f2f2f2"

  },

  iconSearch : {
    paddingLeft:13,
    paddingTop:13,
    paddingRight:13,
    paddingBottom:15,
    height:45,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 0,
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    borderRightColor: 'transparent',
    borderWidth: 1,
    width:"100%"

  },
  iconMicro : {
    padding:12,
    height:45,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 25,
    borderLeftColor: 'transparent',
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    borderRightColor: '#ccc',
    borderWidth: 1,
    width:40

  }

})

export default Accueil
