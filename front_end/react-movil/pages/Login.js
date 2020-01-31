import React from 'react';
import { Text, View, Button } from 'react-native';

export default ({ history }) => {
  return(
    <View>
      <Text>Login Page</Text>
      <Button title="Ingresar" onPress={ () => history.push("/home") } />
    </View>
  )
}