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
        this.refPes=React.createRef();
        this.refAlcada=React.createRef();
        this.state = {
            pes:0,
            alcada:0,
            missatge:'',
            color:'green'
        }
    }
    //callback que serveix per a guardar, el pes introduit en el component input, dins l'estat del component FormulariCalcIMC
    //és cridat per l'event associat al component input
    guardaPes=(elPes)=>{
        this.setState({pes:elPes})
    }
    //callback que serveix per a guardar, l'alçada introduida en el component input, dins l'estat del component FormulariCalcIMC
    //és cridat per l'event associat al component input
        guardaAlcada=(alcada)=>{
        this.setState({alcada:alcada})
    }

    //Aquest mètode, realitza les comprovacions pertinents per a assegurar-se que les dades rebudes són correctes.
    //Realitza els càlculs de l'IMC, i selecciona un missatge a mostrar a l'usuari
    calculaIMC=()=>{
        
        if(!(this.state.pes>0)){
            this.refPes.current.shake()
        }

        if(!(this.state.alcada)>0){
            this.refAlcada.current.shake()
       }
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
            if(calcul>=27.0){
                let nouColor=(calcul>=40.0?'red':'orange')
                this.setState({color: nouColor})
            }
            this.setState({missatge:resultat})
            console.log(calcul)

        }else{
            this.setState({missatge:''})
        }
    }

    render() {
        return (
            <View style={[styles.ombra, styles.seccioFormulari,{backgroundColor:'white', flex:1}]}>
                <View style={{margin:5, padding:5}}>
                    <Text style={[{ fontSize: 32 },styles.colorSecundari2]}> Dades</Text>
                </View>
                <View style={[styles.ombra]}>
                    <View styles={{ flexDirection:'row'}}>
                        <Input ref={this.refPes} label='PES' labelStyle={{color:'blue'}} placeholder='introdueix el pes'  keyboardType='decimal-pad' 
                        errorStyle={{ color: 'red' }} errorMessage={this.state.pes<=0?'El pes ha de ser MAJOR que 0':''} 
                        onChangeText={this.guardaPes}></Input>
                    </View>
                    <View styles={{ flexDirection:'row'}}><Input ref={this.refAlcada} label='ALÇADA' labelStyle={{color:'blue'}} keyboardType='decimal-pad' placeholder="introdueix l'alçada" 
                        errorStyle={{ color: 'red' }} errorMessage={this.state.alcada<=0?'L\'alçada ha de ser MAJOR que 0':''}
                        onChangeText={this.guardaAlcada}></Input></View>
                </View>
                <Button title='Calcular IMG' type="outline" raised={true} onPress={this.calculaIMC}></Button>
                <View style={[styles.ombra,{margin:5, padding:5,}]}>
                    <Text>Resultat</Text>
                    <Text style={{color:this.state.color}}>
                        {this.state.missatge}
                    </Text>
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    colorSecundari2: {
        color: '#ff1744'
    },
    seccioFormulari: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        alignItems: "stretch",
        padding: 5,
        margin: 5,
    },
    ombra: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});
