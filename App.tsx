/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SafeAreaAndriod from './components/SafeAreaAndriod';
import HomeScreen from "./screens/HomeScreen";


const Stack = createStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        // cardStyle: { backgroundColor: "#16032E" }  // Replace '#FFFFFF' with your desired color
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="UserSignIn" component={UserSignInScreen} />
        <Stack.Screen name="MerchantSignIn" component={MerchantSignInScreen} />
        <Stack.Screen name="UserRegister" component={UserRegisterScreen} />
        <Stack.Screen name="MerchantRegister" component={MerchantRegisterScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
