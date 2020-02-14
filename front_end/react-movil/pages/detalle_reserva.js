import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { Icon,Button, Card } from 'react-native-elements';
import HeaderExample from '../components/header';
import { Link } from 'react-router-native';

// const HeaderExample = require('../components/header')

export default class virtualLibrary extends Component {
  
  render() {
    return (    
      <View style={styles.container}>
            <HeaderExample />
        <Text style={styles.text}>Detalle de su reserva.</Text>
            <ScrollView vertical={true}>
              <Card
                title='Name Book'
                image={require('../assets/iconos-libros.png')}>
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
                <TouchableHighlight style={styles.containerIngresar}>
                    <Link to="/detalle" style={ styles.button }>
                        <Text >Detalle</Text>
                    </Link>
                </TouchableHighlight>
              </Card>
            </ScrollView>
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
    backgroundColor: '#4fd1c5',
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
    color:'white',
    paddingLeft:'10%',
    paddingBottom: '5%',
    paddingTop: '8%',
    fontSize: 18,
  },
  button: {
    position: 'relative',
    bottom: '0%',
    marginBottom: 20,
    borderRadius: 100,
    backgroundColor: 'pink',
    paddingHorizontal: 20,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
})