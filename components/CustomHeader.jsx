import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomHeader = () => {


    return (
        <View style={styles.container}>
            <View style={styles.ellipseOne} />
            <View style={styles.ellipseTwo} />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        position: "relative",
        left:-120,
        marginBottom:750
    },
    ellipseOne: {
        backgroundColor: 'rgba(176,170,209,0.13)',
        borderRadius: 100,
        width: 200,
        height: 200,
        position: 'absolute',
        top: 40,
        left: 20
    },
    ellipseTwo: {
        backgroundColor: 'rgba(176,170,209,0.13)',
        borderRadius: 100,
        width: 200,
        height: 200,
        position: 'absolute',
        top: 0,
        left: 120
    }
});

export default CustomHeader;
