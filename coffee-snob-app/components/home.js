import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function home (){
return (
    <View style={styles.header}>
        <Text style={styles.title}>Coffee Snob</Text>
    </View>
);

};

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#A0522D',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {wdith: 0 , height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },

    title:{
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold'
    }
});