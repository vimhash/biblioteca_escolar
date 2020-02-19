import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import MenuDrawer from 'react-native-side-drawer';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const API = 'http://192.168.100.6:8001/server/library'

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Libro', 'Fecha', 'Estado'],
      tableData: [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '3'],
        ['a', 'b', 'c']
      ],
      reserva: [],
      open: false,
    }
  }

  componentDidMount() {
    axios.get(API+"?tabla=reserva")
    .then( response => {
      this.setState({ reserva: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

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
        <Text style={{color: '#fff', marginVertical: '10%', alignItems: 'center', paddingHorizontal: '5%'}}>Sistema de Biblioteca</Text>
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
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

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
                <Text style={styles.textHeader}>Sistema de biblioteca</Text>
              </View>
                <TouchableHighlight style={styles.menu}>
                  <Link to="/library">
                    <Icon style={styles.openButton} name="chevron-left" size={30} color="#fff" />
                  </Link>
                </TouchableHighlight>
          </View>
          <View style={styles.body}>
            <Text style={styles.text}>Reservaciones Realizadas.</Text>
              <ScrollView horizontal={true}>
                <View style={styles.table}>
                  <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={state.tableHead} style={styles.headerTable} textStyle={styles.textTable}/>
                  </Table>
                  <ScrollView >
                  <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                  <Rows data={state.tableData} style={styles.row} textStyle={styles.textTable}/>
                  </Table>
                  </ScrollView>
                </View>
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
    backgroundColor: '#4fd1c5',
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
    color:'white',
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
  headerTable: { 
    height: 50,
    backgroundColor: '#537791',
  },
  textTable: { 
    textAlign: 'center', 
    fontWeight: '100',
    color: 'white' 
  },
});