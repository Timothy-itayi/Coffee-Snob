import React from 'react';
import { Animated, View} from 'react-native';

import CafeCard from './CafeCard';
import { cafe } from '../data/CafeData'
import styles from '../AppStyles';

const CafeList = () => {
  return (
   
      <Animated.FlatList
        data={cafe}
        keyExtractor={(item, index) => index.toString()}
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

