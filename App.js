import React, { useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

let timer = null
let ss = 0;
let mm = 0;
let hh = 0;

export default function App(){

    const[numero, setNumero] = useState('00:00:00');
    const[botao, setBotao]=useState('COMEÇAR')
    const[ultimo, setUltimo]=useState(null)

    function começar(){
      if(timer !== null){
        clearInterval(timer);
        timer = null;
        setBotao('COMEÇAR');
      }else{
        timer = setInterval(() =>{
          ss++;
          if(ss==60){
            ss = 0;
            mm++
          }
          if(mm ==60){
            mm=0;
            hh++;
          }

          let format =
          (hh < 10 ? '0' + hh : hh) + ':'
          + (mm < 10? '0'+ mm : mm) + ':'
          + (ss < 10? '0'+ ss : ss)

          setNumero(format);

        },1000)

        setBotao('PARAR')
      }


    }

    function limpar(){
      if(timer !== null){
        clearInterval(timer);
        timer = null;
      }

      setUltimo(numero)
      setNumero('00:00:00')
      ss = 0;
      mm = 0;
      hh = 0;
      setBotao('COMEÇAR')


    }

  return (
    <View style={styles.container}>

      <Image
      source={require('./src/crono.png')}
      />

      <Text style={styles.timer}>
        {numero}
      </Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={começar}>
          <Text style={styles.btnTexto}>{botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>RESETAR</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          {ultimo ? 'Último tempo: ' + ultimo : ''}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef99'
  },
  timer:{
    marginTop: -160,
    fontSize:45,
    fontWeight:'bold',
    color:'#FFF',
    textShadowColor: '#FFFFFF90',
    textShadowRadius: 10,
    shadowOffset:{
      width:0,
      height:2},
    shadowOpacity:0.2,
    elevation:10
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 130,
    height:40
  },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height:40,
    margin:17,
    borderRadius:9,
    shadowColor:'#FFFFFF',
    shadowRadius:10,
    shadowOffset:{
      width:0,
      height:0},
    shadowOpacity:1,
    elevation:20
  },
  btnTexto:{
    fontSize: 20,
    fontWeight:'bold',
    color:'#00aeef',
    textShadowColor: '#00aeef40',
    textShadowRadius: 10,
    shadowOffset:{
      width:0,
      height:2},
    shadowOpacity:0.2,
    elevation:10

  },
  areaUltima:{
    marginTop:40,
  },
  textoCorrida:{
    fontSize:25,
    color: '#FFF',
    fontStyle: 'italic',
    textShadowColor: '#FFFFFF60',
    textShadowRadius: 10,
    shadowOffset:{
      width:0,
      height:2},
    shadowOpacity:0.2,
    elevation:10
  }




})