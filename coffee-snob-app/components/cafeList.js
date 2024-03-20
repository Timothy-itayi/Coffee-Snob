import React from 'react';
import { FlatList, View} from 'react-native';

import CafeCard from './CafeCard';
import { cafe } from '../data/CafeData'
import styles from '../AppStyles';

const CafeList = ({ onScroll }) => {
  return (
   
      <FlatList
        data={cafe}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <CafeCard cafe={item} />
          </View>
        )}
        contentContainerStyle={styles.listContent}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
    
  );
}

export default CafeList;
