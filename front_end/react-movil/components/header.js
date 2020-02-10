import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Icon,Button, Card, Header } from 'react-native-elements';

export default class HeaderExample extends Component {
  render() {
    return (
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Sistema de Biblioteca', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
  }
}


