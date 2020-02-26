import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Image, AsyncStorage, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import MenuDrawer from 'react-native-side-drawer';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

// const API = 'http://192.168.1.39:8001/server/library'
const API = 'http://172.16.11.132:8001/server/library'

export default class Reserva extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserva: [],
      open: false,
      id_estudiante: '',
    }
  }

  getData = () => {
    axios.get(`${ API }/reserva_estudiante?id_estudiante='${ this.state.id_estudiante }'`)
    .then( response => {
      this.setState({ reserva: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })
  }

  componentDidMount() {
    this.asyncstorageGet()
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  asyncstorageGet = async () => {
    try {
      const id = await AsyncStorage.getItem('id_estudiante')
      this.setState({ id_estudiante: id})
      this.getData()
    } catch (e) {
      alert(e)
    }
  }
  
  drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
        <TouchableOpacity onPress={this.toggleOpen} >
          <Icon style={styles.closeButton} name="close" size={30} color="#fff" />
        </TouchableOpacity>

        <View>
          <Image
            style={{width: 100, height: 100, marginHorizontal: '15%', borderRadius: 100,}}
            source={require('../assets/book.jpg')}
          />

          <TouchableHighlight>
            <Link to="/library" style={styles.menuButton}>
              <Text style={{color: '#fff'}}>Biblioteca</Text>
            </Link>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight>
            <Link to="/reserve" style={styles.menuButton}>
              <Text style={{color: '#fff'}}>Reservaciones</Text>
            </Link>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  render() {
    const { reserva } = this.state
    return (
      <View style={styles.container}>
        <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity onPress={this.toggleOpen} style={styles.menu}>
              <Icon style={styles.openButton} name="navicon" size={30} color="#fff" />
            </TouchableOpacity>

            <View style={styles.header} >
              <Text style={styles.textHeader}>Sistema Bibliotecario</Text>
            </View>

            <TouchableHighlight style={styles.menu}>
              <Link to="/library">
                <Icon style={styles.openButton} name="chevron-left" size={30} color="#fff" />
              </Link>
            </TouchableHighlight>
          </View>

          <View style={styles.body}>
          <ScrollView vertical={true}>
            <Text style={styles.text}>Historial de Reservas Realizadas.</Text>
            { reserva.map( element => 
              <Card title={ element.id_libro+"" } image={{ uri: `${element.portada}` }} key={ element.id }>
                <Text style={{marginBottom: 10}}>
                  Fecha Pedido: { element.fecha_pedido }
                </Text>
                <Text style={{marginBottom: 10}}>
                  Fecha Aprobacion/Rechazo: { element.fecha_aprobacion_rechazo }
                </Text>
                <TouchableHighlight style={styles.button}>
                  <Text style={{marginHorizontal: 20, color: '#000'}} >
                    <Icon name="book" size={20} color="#000" /> { element.id_estado_reserva }
                  </Text>
                </TouchableHighlight>
              </Card> ) 
            }
            </ScrollView>
          </View>
        </MenuDrawer> 
      </View>
    )
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%', 
    height: '100%',
    backgroundColor: '#fff',
  },
  animatedBox: {
    flex: 1,
    backgroundColor: '#2c7a7b',
  },
  header: {
    flex: 2, 
    height: 75, 
    backgroundColor: '#2c7a7b',
  },
  body: {
    flex: 6,
  },
  text:{
    color:'#000',
    paddingLeft:'10%',
    paddingBottom: '5%',
    paddingTop: '8%',
    fontSize: 18,
  },
  textHeader:{
    color:'white',
    paddingLeft:'10%',
    paddingBottom: '5%',
    paddingTop: '15%',
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  menu: {
    flex: 0.5, 
    height: 75, 
    backgroundColor: '#2c7a7b',
  },
  openButton: {
    marginTop: '50%',
    marginHorizontal: '15%',
  },  
  closeButton: {
    marginTop: '15%',
    marginBottom: '20%',
    marginLeft: '5%',
    marginRight: '60%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  menuButton: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255, .1)',
  },
  containerTable: {
    marginHorizontal: 20
  },
  item: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: 30,
  },
  itemInvisible: {
    backgroundColor: 'transparent'
  },
  itemText: {
    color: '#fff'
  },
  itemContent: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: 30,
  },
});