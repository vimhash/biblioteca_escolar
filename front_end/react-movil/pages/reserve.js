import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import HeaderExample from '../components/header';
import { Link } from 'react-router-native';

export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name book', 'Fecha de reserva', 'Estado'],
      widthArr: [40, 60, 80]
    }
  }

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
            <HeaderExample />
        <Text style={styles.text}>Detalle de su reserva.</Text>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9', width: '100%'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.textHeader}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.textTable}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
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
  header: { 
    height: 70, 
    backgroundColor: 'black' 
  },
  textHeader: { 
    textAlign: 'center', 
    fontWeight: '100',
    color: 'white' 
  },
  textTable: { 
    textAlign: 'center', 
    fontWeight: '100' 
  },
  text:{
    color:'white',
    paddingLeft:'10%',
    paddingBottom: '5%',
    paddingTop: '8%',
    fontSize: 18,
  },
  dataWrapper: { 
    marginTop: -1 
  },
  row: { 
    height: 40, 
    backgroundColor: '#E7E6E1' 
  }
});