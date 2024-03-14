import React from 'react';
import CafeCard from './CafeCard';
import { Animated , View } from 'react-native';
import { cafe } from '../data/CafeData'
import styles from '../AppStyles';
 
const CafeList = ({ scrollY }) => {
 
    return (
      <Animated.FlatList
        
        data={cafe}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <CafeCard cafe={item} />
          </View>
        )}
        contentContainerStyle={styles.listContent}
        onscroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY}}}],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />
    );
  };
  
 
export default CafeList;