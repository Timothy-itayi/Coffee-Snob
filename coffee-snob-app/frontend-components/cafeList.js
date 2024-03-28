import React, { useMemo } from 'react';
import { Animated, View } from 'react-native';
import CafeCard from './CafeCard';
import styles from '../AppStyles';

const CafeList = ({ cafes, selectedCity}) => {

  
  const filteredCafes = useMemo(() => {
    let filtered = cafes.filter((cafe) => {
      const cityMatch = selectedCity ? cafe.city === selectedCity : true;
      let filterMatch = true;

      return cityMatch && filterMatch;
    });

  
    return filtered;
  }, [cafes, selectedCity]);

  return (
    <Animated.FlatList
      data={filteredCafes}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View>
          <CafeCard cafe={item} />
        </View>
      )}
      contentContainerStyle={styles.listContent}
    />
  );
};

export default CafeList;
