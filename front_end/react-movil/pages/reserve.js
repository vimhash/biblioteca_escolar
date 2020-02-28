import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Image, AsyncStorage, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import MenuDrawer from 'react-native-side-drawer';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

// const API = 'http://192.168.1.39:8001/server/library'
// const API = 'http://172.16.11.141:8001/server/library'
const API = 'http://192.168.100.6:8001/server/library'

// Anclaje Redmi
// const API = 'http://192.168.43.44:8001/server/library'

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
  
  sidebar = () => {
    return (
      <View style={ styles.sidebar }>
        <Icon style={ styles.closeButton } name="close" size={ 30 } color="#fff" onPress={ this.toggleOpen } />

        <View style={ styles.sidebar_body }>
          <Image style={ styles.image } source={ require('../assets/book.jpg') } />
          <Text style={ {color: '#fff', marginVertical: '10%', alignItems: 'center', paddingHorizontal: '5%'} }>Sistema Bibliotecario</Text>

          <View style={ styles.menuButton }>
            <Link to="/library">
              <Text style={ { color: '#fff' } }>
                <Icon style={ styles.openButton } name="home" size={ 20 } color="#fff" /> Libreria
              </Text>
            </Link>
          </View>

          <View style={ styles.menuButton }>
            <Link to="/reserve">
              <Text style={ { color: '#fff' } }>
              <Icon style={ styles.openButton } name="bookmark" size={ 20 } color="#fff" />Reservaciones</Text>
            </Link>
          </View>

          <View style={ styles.logoutButton }>
            <Link to="/" >
              <Text style={ { color: '#fff' } }>
              <Icon style={ styles.openButton } name="arrow-circle-left" size={ 30 } color="#fff" />Cerrar Sesión</Text>
            </Link>
          </View>
        </View>
      </View>
    );
  };
  

  render() {
    const { reserva } = this.state
    return (
      <View style={styles.container}>
        <MenuDrawer open={ this.state.open } drawerContent={ this.sidebar() } drawerPercentage={ 50 } animationTime={ 250 } overlay={ true } opacity={ 0.4 }>
          <View style={ styles.header }>
            <Icon onPress={ this.toggleOpen } style={ styles.sidebar_icon } name="navicon" size={ 30 } color="#fff" />
            <Text style={ styles.titulo }>Sistema Bibliotecario</Text>
            {/* <Link to="/library" >
              <Icon style={ styles.home_icon } name="home" size={ 30 } color="#fff" />
            </Link> */}
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
  //HEADER AND SIDEBAR
  header: {
    position: 'relative',
    width: '100%', 
    height: '6%',
    backgroundColor: '#2c7a7b',
  },
  sidebar_icon: {
    position: 'absolute',
    top: 5,
    left: 25
  },
  home_icon: {
    position: 'absolute',
    top: 5,
    right: 25
  },
  titulo: {
    position: 'absolute',
    top: 5,
    color:'white',
    left: '30%',
    fontSize: 20,
  },
  sidebar: {
    position: 'absolute',
    top: '6%',
    height: '100%',
    width: '75%',
    backgroundColor: '#000',
  },
  closeButton: {
    position: 'absolute',
    left: '80%',
    paddingVertical: 5,
  },
  sidebar_body: {
    position: 'absolute',
    top: '6%',
    alignItems: 'center',
    alignContent: 'center'
  },
  image: {
    width: 100, 
    height: 100, 
    marginHorizontal: '15%', 
    borderRadius: 100,
  },
  menuButton: {
    padding: 10,
    marginTop: 5,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255, .1)',
  },
  logoutButton: {
    position: 'absolute',
    top: '250%',
    padding: 10,
    marginTop: 5,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255, .1)',
  },
  //HEADER AND SIDEBAR
  body: {
    position: 'absolute',
    top: '6%',
    width: '100%',
    height: '100%'
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