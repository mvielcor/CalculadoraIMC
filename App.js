/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {

  StyleSheet,
  View,
  Text,
} from 'react-native';
import {FormulariCalcIMC} from './components/FormulariCalcIMC'

export class App extends Component {
  render() {
    return (
      <View style={styles.colorPrimari}>
        <View style={styles.sectionTitle}>
          <Text style={[{fontSize:32},styles.colorSecundari]}>Calculadora IMG</Text>
        </View>
        <View style={{flex:2, backgroundColor:'white'}}>
          <FormulariCalcIMC />
        </View>
        <View style={{flex:1}}>
          <Text style={styles.sectionDescription}>Created for 2n DAM</Text>
        </View>  
      </View>
    );
  }
};


const styles = StyleSheet.create({
  colorPrimari: {
    backgroundColor: '#6a1b9a',
    flex:1,
  },
  colorSecundari: {
    color: '#ff1744'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignItems:'center',
    padding:5,
  },
  sectionDescription: {
    marginTop:8,
    fontSize: 18,
    fontWeight: '400',
    color: 'grey'
  }
});

export default App;
