import React, { useMemo } from 'react';
import { Animated, View } from 'react-native';
import CafeCard from './CafeCard';
import styles from '../AppStyles';

const CafeList = ({ cafes, activeFilter, selectedCity }) => {

  
  const filteredCafes = useMemo(() => {
    let filtered = cafes.filter((cafe) => {
      const cityMatch = selectedCity ? cafe.city === selectedCity : true;
      let filterMatch = true;

      if (activeFilter === 'Rating') {
        filterMatch = cafe.rating <= 5;
      } else if (activeFilter === 'Reviews') {
        filterMatch = parseInt(cafe.totalReviews.replace(/\D/g, ''), 10) <= 1000;
      } else if (activeFilter === 'Open') {
        filterMatch = cafe.openingHours === 'Open';
      }

      return cityMatch && filterMatch;
    });

    // Apply sorting if activeFilter is 'rating' or 'Reviews'
    if (activeFilter === 'rating') {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (activeFilter === 'Reviews') {
      filtered = filtered.sort((a, b) => {
        const aReviews = parseInt(a.totalReviews.replace(/\D/g, ''), 10);
        const bReviews = parseInt(b.totalReviews.replace(/\D/g, ''), 10);
        return bReviews - aReviews;
      });
      
    }

    return filtered;
  }, [cafes, selectedCity, activeFilter]);

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
