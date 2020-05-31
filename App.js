import React from 'react';
import { Text, View, Button } from 'react-native';
import _ from 'lodash'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import Proposals from './screens/Proposals'


const Stack = createStackNavigator();
const store = createStore(rootReducer)

const homeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Proposals')}
    />
  </View>
)

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="Proposals" component={Proposals} />

      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
)

export default App
