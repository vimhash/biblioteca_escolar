import React, { Component } from 'react';
import { Modal, View, Text, StyleSheet, TouchableHighlight, ScrollView, Image, AsyncStorage, TextInput, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuDrawer from 'react-native-side-drawer';
import axios from 'axios';

// const API = 'http://192.168.1.39:8001/server/'
const API = 'http://172.16.11.223:8001/server/'
// const API = 'http://192.168.100.6:8001/server/'

// Anclaje Redmi
// const API = 'http://192.168.43.44:8001/server/'

export default class virtualLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      libros: [],
      estudiantes: [],
      id_estudiante: '',
      nombre_estudiante: '',
      librosBuscados: [],
      titulo: '',
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  search_Handler = text => {
    this.setState({ titulo: text })
  }

  getData = () => {
    axios.get(API+"library_librosdisponibles?tabla=libro&&disponible=true")
    .then( response => {
      this.setState({ libros: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })

    axios.get(`${API}login_estudiantes?identificacion=${ this.state.id_estudiante }`)
    .then( response => {
      this.setState({ nombre_estudiante: response.data.datos.nombre1 + " " + response.data.datos.apellido1 })
      AsyncStorage.setItem('nombre_estudiante', this.state.nombre_estudiante.toString());
    })
    .catch(error => {
      console.log(error)
    })
  }

  componentDidMount() {
    this.asyncstorageGet()
  }

  searchBookMovil = e => {
    axios.get(`${API}library_searchbookmovil?titulo=${ this.state.titulo }`)
    .then( response => {
      this.setState({ librosBuscados: response.data.datos })
    })
  }

  asyncstorageGet = async () => {
    try {
      const id = await AsyncStorage.getItem('id_estudiante')
      this.setState({ id_estudiante: id})
      this.getData()
    } catch (e) {
      alert(e)
    }
  }

  asyncstorageSave = async (item) => {
    try {
      await AsyncStorage.setItem('id_libro', item.toString())
      axios.put(API+"library?tabla=libro", {
        datos: [{
          id: item,
          disponible: false
        }]
      })
      return this.props.history.push("detalle")
    } catch (err) {
      alert(err)
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
                <Icon style={ styles.openButton } name="home" size={ 20 } color="#fff" />Libreria
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
    const { libros, librosBuscados, titulo } = this.state
    return (
      <View style={ styles.container }>
        <MenuDrawer open={ this.state.open } drawerContent={ this.sidebar() } drawerPercentage={ 50 } animationTime={ 250 } overlay={ true } opacity={ 0.4 }>
          <View style={ styles.header }>
            <Icon onPress={ this.toggleOpen } style={ styles.sidebar_icon } name="navicon" size={ 30 } color="#fff" />
            <Text style={ styles.titulo }>Sistema Bibliotecario</Text>
            {/* <Link to="/library" >
              <Icon style={ styles.home_icon } name="home" size={ 30 } color="#fff" />
            </Link> */}
          </View>

          <View style={ styles.body }>
            <ScrollView vertical={true}>
              <Text style={styles.text}>Bienvenido { this.state.nombre_estudiante }.</Text>
              <Text style={{marginHorizontal: 5, marginTop: 5, color: '#1a202c', paddingHorizontal: 15, paddingVertical: 5,  borderColor: '#fff', borderWidth: 2,}}>Selecciona el libro que deseas reservar, para mas información has click en "DETALLES".</Text>
              <View style={styles.containerEmail}>
                <Icon style={{marginLeft: '5%'}} name="search" size={20} color="#000" />
                <TextInput
                  placeholder="Buscar Libro" 
                  placeholderTextColor="gray" 
                  name="titulo"
                  value={ titulo }
                  type="search"
                  style={styles.textInput}
                  onChangeText={ this.search_Handler }
                />

                {/*  */}
                <Modal animationType="slide" transparent={ false } visible={ this.state.modalVisible }>
                  <View style={{marginTop: 22}}>
                    <View style={ { alignItems: 'center', flex: 1, flexDirection: 'row', alignContent: 'center', left: 25 } }>
                      { librosBuscados.map( element => (
                        <TouchableHighlight key={ element.id } onPress={ () => this.asyncstorageSave(element.id) }>
                          <Image style={{width: '20%', height: 100, marginRight: '1%', left: '1%', marginTop: '50%', position: 'relative' }} source={ { uri: `${element.portada}` } } />
                        </TouchableHighlight>
                        )
                      )}
                    </View>

                    <View style={ { height: 20, width: 50, left: '85%' } }>
                      <Button title="X" onPress={() => { this.setModalVisible(!this.state.modalVisible) }} />
                    </View>
                  </View>
                </Modal>

                <Button title="Buscar" onPress={() => { this.searchBookMovil(); this.setModalVisible(true) }} />
                {/*  */}
              </View>

              { libros.map( element => 
                <Card title={ element.titulo } image={ { uri: `${element.portada}` } } key={ element.id }>
                  <TouchableHighlight style={styles.button} onPress={ () => this.asyncstorageSave(element.id) }>
                    {/* <Link to="/detalle" > */}
                      <Text style={{marginHorizontal: 20, color: '#000'}} >
                        <Icon name="book" size={20} color="#000" /> Detalles
                      </Text>
                    {/* </Link> */}
                  </TouchableHighlight>
                </Card> ) 
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
    position: 'relative',
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
  textInput:{
    backgroundColor:'transparent',
    flex: 5,
    color:'black',
    paddingLeft:'5%',
  },
  containerEmail:{
    height: 30,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    marginLeft:'10%',
    marginRight:'10%',
    borderWidth: 1,
    borderColor: 'gray',
  },
})