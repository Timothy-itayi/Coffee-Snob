import React , {useMemo} from 'react';
import { Animated, View} from 'react-native';

import CafeCard from './CafeCard';

import styles from '../AppStyles';

const CafeList = ({ cafes, activeFilter}) => {

  const filterCafes = useMemo(() => {
    if (activeFilter === 'rating') {
      return cafes.sort((a, b) => b.rating - a.rating);
    } else if (activeFilter === 'location') {
      return cafes.sort((a, b) => a.location.localeCompare(b.location))
    } else if ( activeFilter === 'Open') {
      return cafes.filter(cafe => cafe.openingHours === 'Open')
    }
    return cafes.slice();
  }, [cafes, activeFilter]);

  return (
   
      <Animated.FlatList
        data={filterCafes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <CafeCard cafe={item} />
          </View>
        )}
        contentContainerStyle={styles.listContent}
     
        contentLength={CafeList}
      />
    
  );
}

export default CafeList;

