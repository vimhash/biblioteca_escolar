import React from 'react';
import { Text, View, Button } from 'react-native';

export default ({ history }) => {
  return(
    <View>
      <Text>Home Page</Text>
      <Button title="Ingresar" onPress={ () => history.push("/") } />
    </View>
  )
}