import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View} from 'react-native';
import Ellipse_Lower_Right from '../components/Ellipse_Lower_Right';
const HomeScreen = () =>{
    return (
        <View style= {styles.Home}>
            <Text> Hello World</Text>
            <Ellipse_Lower_Right />
        </View>
    )
}


const styles = StyleSheet.create({
    Home: {
    }
  });


export default HomeScreen;