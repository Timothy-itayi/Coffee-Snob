import React from 'react';
import { Animated, View} from 'react-native';

import CafeCard from './CafeCard';
import { cafes } from '../data/CafeData'
import styles from '../AppStyles';

const CafeList = ({ activeFilter}) => {

  const filterCafes = () => {
    if (activeFilter === 'rating') {
      return cafes.sort((a, b) => b.rating - a.rating);
    } else if (activeFilter === 'location') {
      return cafes.sort((a, b) => a.location.localeCompare(b.location))
    } 
    return cafes;
  };

  return (
   
      <Animated.FlatList
        data={filterCafes()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <CafeCard cafe={item} />
          </View>
        )}
        contentContainerStyle={styles.listContent}
        
      />
    
  );
}

export default CafeList;

