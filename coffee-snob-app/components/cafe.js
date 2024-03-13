import React from 'react';
import CafeCard from './CafeCard';
import { FlatList, StyleSheet, View } from 'react-native';
import cafe from '../data/CafeData'


const CafeList = () => {
    return (
      <FlatList
        
        data={cafe}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <CafeCard cafe={item} />
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    );
  };
  
  const styles = StyleSheet.create({
    cardContainer: {
      marginBottom: 15, 
    },
    listContent: {
      paddingVertical: 10, 
      paddingBottom: 200,
    },
  });
export default CafeList;