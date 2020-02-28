import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView, AsyncStorage, Image } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import { Card } from 'react-native-elements';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

// const API = 'http://192.168.1.39:8001/server/'
// const API = 'http://172.16.11.141:8001/server/'
const API = 'http://192.168.100.6:8001/server/'

// Anclaje Redmi
// const API = 'http://192.168.43.44:8001/server/'

export default class detalleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      libros: [],
      id_libro: '',
      id_estudiante: '',
      nombre_estudiante: '',
    };
  }

  componentDidMount() {
    this.asyncstorageGet()
  }

  getData = () => {
    axios.get(`${ API }library_byID?tabla=libro&&id=${ this.state.id_libro }`)
    .then(response => {
      this.setState({ libros: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })
  }
 
  asyncstorageGet = async () => {
    try {
      const id_libro = await AsyncStorage.getItem('id_libro')
      this.setState({ id_libro: id_libro })
      const id_estudiante = await AsyncStorage.getItem('id_estudiante')
      this.setState({ id_estudiante: id_estudiante })
      const nombre_estudiante = await AsyncStorage.getItem('nombre_estudiante')
      this.setState({ nombre_estudiante: nombre_estudiante })
      this.getData()
    } catch (e) {
      alert(e)
    }
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

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

  postData = () => {
    this.post = {
      tabla: "reserva",
      datos: {
        id_estado_reserva: 3,
        id_libro: this.state.id_libro,
        id_estudiante: this.state.id_estudiante,
        nombre_estudiante: this.state.nombre_estudiante,
        fecha_pedido: this.yyyymmdd()
      }
    }

    if (
      this.post.datos.id_libro === "" || 
      this.post.datos.id_estudiante === "" ||
      this.post.datos.nombre_estudiante === ""
      ) 
      { alert("Algo salio mal, vuelva a intentarlo...")
    } else {
      axios.post(API+"library", this.post)
      .then(response => {
        if ( response.data.ok === true ) {
          alert("Se envió su petición de reserva, por favor estar pendiente de su aprobacion o rechazo del mismo en la página de 'RESERVACIONES'")
          return this.props.history.push("reserve");
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
      })
    }
  }

  updateData = (item) => {
    axios.put(API+"library?tabla=libro", {
      datos: [{
        id: item,
        disponible: true
      }]
    })
  }

  yyyymmdd = () => {
    const date = new Date();
    return date;
  }
  
  render() {
    const { libros } = this.state
    return (
      <View style={ styles.container }>
        <MenuDrawer open={ this.state.open } drawerContent={ this.sidebar() } drawerPercentage={ 50 } animationTime={ 250 } overlay={ true } opacity={ 0.4 }>
          <View style={ styles.header }>
            <Icon onPress={ this.toggleOpen } style={ styles.sidebar_icon } name="navicon" size={ 30 } color="#fff" />
            <Text style={ styles.titulo }>Sistema Bibliotecario</Text>
            <Icon style={ styles.home_icon } name="home" size={ 30 } color="#fff" onPress={ () => {this.updateData( this.state.id_libro ); this.props.history.push("library")} } />
          </View>

          <View style={styles.body}>
            <ScrollView vertical={true}>
              <Text style={styles.text}>Detalle de su Reservación.</Text>
              { libros.map(element => 
                <Card title={ element.titulo } image={ {uri: `${element.portada}` } } key={ element.id }>
                  <Text style={{marginBottom: 10}}>
                    Autor: { element.autor }
                  </Text>
                  <Text style={{marginBottom: 10}}>
                    Editorial: { element.editorial }
                  </Text>
                  <Text style={{marginBottom: 10}}>
                    País: { element.pais }
                  </Text>
                  <Text style={{marginBottom: 10}}>
                    Año: { element.año }
                  </Text>
                  <TouchableOpacity style={styles.button}>
                    <Link to="/detalle" onPress={ () => this.postData() }>
                      <Text style={{marginHorizontal: 20, color: '#000'}} >
                        <Icon name="bookmark" size={20} color="#000" /> Realizar Reservación
                      </Text>
                    </Link>
                  </TouchableOpacity>
                </Card>
                )
              }
              </ScrollView>
          </View>   
        </MenuDrawer> 
      </View>
    );
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
    // flex: 0.5, 
    height: 75,
    // backgroundColor: '#2c7a7b',
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
