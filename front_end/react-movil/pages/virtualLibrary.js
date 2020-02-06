import React, { Component } from 'react';
import { Text,TextInput,View, Image,ImageBackground, StyleSheet } from 'react-native';
import { Icon,Button, Card } from 'react-native-elements'

export default class virtualLibrary extends Component {
  

  render() {
    return (
          <View style={styles.container}>
            <Text style={styles.text}>Bienvenido a la biblioteca virtual.</Text>
              <Card
                title='Name Book'
                image={require('../assets/hamburger-895831_1280.jpg')}>
                <Text style={{marginBottom: 10}}>
                  Autor:
                </Text>
                <Text style={{marginBottom: 10}}>
                  Editorial:
                </Text>
                <Text style={{marginBottom: 10}}>
                  Pais:
                </Text>
                <Text style={{marginBottom: 10}}>
                  Año:
                </Text>
                <Button
                  icon={<Icon type="font-awesome" name="user" color="gray" containerStyle={styles.icon}/>}
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,}}
                  title='Reservar' />
              </Card>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%', 
    height: '100%',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
  },
  containerIngresar:{
    height: 60,
    marginLeft:'25%',
    marginRight:'25%',
    paddingTop:'10%',
  },
  containerEmail:{
    height: 60,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    marginLeft:'10%',
    marginRight:'10%',
  },
  containerPassword:{
    height: 60,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    marginLeft:'10%',
    marginRight:'10%',
  },
  icon:{
    paddingTop: '2%',
    paddingHorizontal: '3%',
  },
  text:{
    color:'#000000',
    paddingLeft:'10%',
    paddingBottom: '5%',
    paddingTop: '5%',
    fontSize: 17,
  },
  textInput:{
    backgroundColor:'transparent',
    flex:5,
    color:'black',
    paddingLeft:'15%',
  }
})