/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  AsyncStorage
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class Login extends Component{
  constructor(props){
    super(props);
    this.state = {nome_usuario : ''};
    this.buscarNome();
    {/*
      AsyncStorage.getItem('ABCD', (err, result) => {
        if (result == null) {
          this.state = {nome_usuario : ''};
        }else{
          this.state = {nome_usuario : result}
        }
      })
    */}
  }

  async buscarNome(){
    let nome_usuario = await AsyncStorage.getItem('ABCD'); 
    //let listOfTasks = await JSON.parse(response) || [];
    this.setState({nome_usuario});
  }

  apertar_botao1(){
    AsyncStorage.setItem('ABCD', 'James alves');
  }

  apertar_botao2(){
    AsyncStorage.getItem('ABCD', (err, result) => {
      Alert.alert(result);
    })
  }

  render(){
    return(
      <View>
        <Text>{this.props.nomeSistema}</Text>
        <TextInput placeholder='usuario' onChangeText={(nome_usuario)=>this.setState({nome_usuario})}  />
        <TextInput placeholder='senha' secureTextEntry visible-password/>
        <Button title='entrar1' onPress={this.apertar_botao1} />
        <Button title='cadastrar2' onPress={this.apertar_botao2} />
        <Text>{this.state.nome_usuario}</Text>
      </View> 
    )
  }

}

export default class App extends Component{
  render() {
    return (
      <View >
        <Login nomeSistema='ESTOQUE' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
