import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import { Link } from 'react-router-native';
import { Icon, Button } from 'react-native-elements';

export default class HeaderExample extends Component {
  render() {
    return (
      <View style={ styles.container }>
         <View style={ styles.menu }>
          <TouchableHighlight>
            <Link to="/" style={ styles.button }>
                <Text backgroundColor='white'>Menu</Text>
            </Link>
          </TouchableHighlight>
        </View>
        <View>
          <Text style={styles.text}>Sistema de Bilbioteca</Text>
        </View>
        <View style={ styles.menu }>
          <TouchableHighlight>
            <Link to="/" style={ styles.button }>
                <Text backgroundColor='white'>Salir</Text>
            </Link>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};

// export default class HeaderExample extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//       <TouchableHighlight>
//         <Link to="/library" style={ styles.button }>
//             <Text backgroundColor='#718096'>Ingresar</Text>
//         </Link>
//       </TouchableHighlight>
//     </View>
//     );
//   }
// }

const styles = StyleSheet.create({
   container:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'stretch',
        backgroundColor: '#4fd1c5',
  },
  menu:{
    color:'white',
    paddingBottom: '5%',
    alignItems: 'flex-end',
  },
  text:{
    color:'#ffffff',
    fontSize: 17,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    marginLeft: 15,
  },
  button: {
    position: 'relative',
    bottom: '0%',
    marginTop: 40,
    marginLeft: 15,
    borderRadius: 100,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})
