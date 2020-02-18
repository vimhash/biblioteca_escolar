import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, TouchableOpacity} from 'react-native';
import { Link } from 'react-router-native';
import MenuDrawer from 'react-native-side-drawer';

export default class HeaderExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        <Text>Close</Text>
        <View style={ styles.menu }>
          <TouchableHighlight>
            <Link to="/library" style={ styles.buttonMenu }>
                <Text backgroundColor='white'>Biblioteca</Text>
            </Link>
          </TouchableHighlight>
        </View>
        <View style={ styles.menu }>
          <TouchableHighlight>
            <Link to="/reserve" style={ styles.buttonMenu }>
                <Text backgroundColor='white'>Reservaciones</Text>
            </Link>
          </TouchableHighlight>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
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
            <Text style={styles.openButton}>Menu</Text>
          </TouchableOpacity>
          <View style={styles.header} >
          <Text style={styles.textHeader}>Sistema de biblioteca</Text>
          </View>
          <TouchableHighlight style={styles.menu}>
                <Link to="/" style={styles.openButton}>
                    <Text backgroundColor='white'>Salir</Text>
                </Link>
              </TouchableHighlight>
          </View>
          </MenuDrawer> 
      </View>
    );
  }
};

const styles = StyleSheet.create({
   container:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'stretch',
        backgroundColor: '#319795',
  },
  menu:{
    color:'white',
    paddingBottom: '5%',
    alignItems: 'flex-end',
    justifyContent:'center',
  },
  text:{
    color:'#ffffff',
    fontSize: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  button: {
    bottom: '0%',
    marginLeft: 20,
    borderRadius: 100,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'flex-end',
  },
  containerMenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    zIndex: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#319795',
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#38C8EC",
    padding: 10
  },
  
  buttonMenu: {
    position: 'relative',
    bottom: '0%',
    borderRadius: 100,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textMenu:{
    position: 'relative',
    bottom: '0%',
    borderRadius: 100,
    backgroundColor: 'white',
    color: 'white',
    fontSize: 17,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    marginLeft: 15,
  },
})