/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import { Text, View,Button } from 'react-native';

const Style = {
 fontSize: 30,
};

const NuevoComponente = ({title}) =>{
 return <Text style={Style} >{title}</Text>
}


const App = () =>{
 const [contador, setContador] = useState(0);
 const [minutos, setMinutos] = useState(0);
 
 const Fetch1 = () => {

  const url = 'https://calculadora-server.herokuapp.com/states-control'
  const body = {
    accountNumber : 20161804,
    name: 'Abdiel',
    age: 21,
  }
  return fetch(url,{
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(body),     
  })
  .then(res => res.json())
  .catch(err => console.error(err.message))
  .then(respuesta => console.log(respuesta))

}

  return(
   <View>
      <Button onPress={Fetch1} title='Enviar'></Button>
   </View>
 )
}

export default App;