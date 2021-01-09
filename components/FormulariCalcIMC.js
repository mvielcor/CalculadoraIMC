import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
  Alert,
} from 'react-native';
import {Input,Button} from 'react-native-elements';
export class FormulariCalcIMC extends Component {

    constructor (props){
        super(props);
        this.state = {
            pes:0.0,
            alcada:0.0,
            missatge:''
        }

    }

    guardaPes=(elPes)=>{
        this.setState({pes:elPes})
    }

    guardaAlcada=(unaAlcada)=>{
        this.setState({alcada:unaAlcada})

    }

    calculaIMC=()=>{
         //1r comprove que s'hagen omplert les dades.
        if(this.state.alcada>0 && this.state.alcada>0){
            //2n realitze la fòrmula indicada.
            let calcul = this.state.pes/Math.pow(this.state.alcada, 2);
            let resultat = ""
            //3r averigüe el missatge que he de mostrar.
            if(calcul < 18.5) {
            resultat = "Pes insuficient";
            } else if(calcul >= 18.5 && calcul < 25.0){
                resultat = "Pes normal"
            } else if(calcul >= 25.0 && calcul < 27.0){
                resultat = "Sobrepes grau I"
            } else if(calcul >= 27.0 && calcul < 30.0){
                resultat ="Sobrepes grau II"
            } else if(calcul >= 30.0 && calcul < 35.0){
                resultat = "Obesitat tipus I"
            } else if(calcul >= 35.0 && calcul < 40.0){
                resultat = "Obesitat tipus II"
            } else if(calcul >= 40.0 && calcul < 50.0){
                resultat = "Obesitat mòrbida"
            } else if(calcul >= 50.0){
                resultat = "Obesitat extrema"
            } 
            this.setState({missatge:resultat})
        }else{
            this.setState({missatge:''})  
        }
    }

    render(){
        return(
            <View>
                <View style={styles.sectionTitle}>
                    <Text style={[{fontSize:32},styles.colorSecundari2]}>Dades</Text>
                </View>
                <View>
                   <Input label='PES' labelStyle={{color:'blue'}} 
                            placeholder='introdueix el pes'
                            errorMessage={this.state.pes<=0.0?"El pes ha de ser >0":''}
                            keyboardType='decimal-pad'
                            onChangeText={this.guardaPes}
                   ></Input> 
                </View>
                <View>
                   <Input label='ALÇADA' labelStyle={{color:'blue'}} 
                        placeholder="introdueix l'alçada"
                        errorMessage={this.state.alcada<=0.0?"L'alçada ha de ser > 0":''}
                        keyboardType='decimal-pad'
                        onChangeText={this.guardaAlcada}
                    ></Input> 
                </View>
                <Button title='Calcular IMC' type="outline" raise={true} onPress={this.calculaIMC}/>
                <View>
                    <Text>Resultat</Text>
                    <Text>{this.state.missatge}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    colorSecundari2: {
        color: '#ff1744'
    },
    sectionTitle: {
        fontSize:24,
        fontWeight: 'bold',
        color: 'white',
        alignItems: "center",
        padding:5,
        margin:5,
      },
})
