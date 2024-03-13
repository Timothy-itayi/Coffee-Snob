import React from 'react';
import CafeCard from './CafeCard';
import { FlatList, StyleSheet, View } from 'react-native';

export const cafe = [
    {
        image: require('../assets/botanic.jpeg'),
        name: 'Botanic Brews',
        description: 'Tranquil oasis for plant lovers and coffee enthusiasts alike.',

    },
    {
        image: require('../assets/rustic.avif'),
        name: 'Barnwood Bistro',
        description: 'Charming rustic cafe nestled in the heart of the countryside.',
        
    },
    {
        image: require('../assets/white.jpeg'),
        name: 'Marble Cafe',
        description: 'Sophisticated sanctuary known for its elegant white marble aesthetic.',
        
    }
]

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