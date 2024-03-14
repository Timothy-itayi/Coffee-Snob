import React from "react";
import { View,  StyleSheet } from "react-native";
import CafeList from './cafe';

export default function Home (){
return (
    <View style={styles.container}>

         <View style={styles.header}>
      
    </View>
    <CafeList/>

    </View>
   
);

};

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#A0522D',
        height: 100,
        alignItems: 'center',
       
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