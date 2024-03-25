import React from 'react';
import { View , TouchableOpacity , Text } from 'react-native';
import styles from '../AppStyles';

const CafeFilter = ({ activeFilter , onChangeFilter  }) => {
    return (
        <View style={styles.cafeFilterContainer} >

            <TouchableOpacity
            style={[styles.cafeFilterButton, activeFilter === 'rating' && styles.activeCafeFilterButton]}
            onPress={() => onChangeFilter('rating')}>
                <Text  style={[styles.cafeFilterButtonText, activeFilter === 'rating' && styles.activeCafeFilterButtonText]}>Rating</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.cafeFilterButton, activeFilter === 'Open' && styles.activeCafeFilterButton]}
            onPress={() => onChangeFilter('Open')}>
                <Text  style={[styles.cafeFilterButtonText, activeFilter === 'Open' && styles.activeCafeFilterButtonText]}>Open</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.cafeFilterButton, activeFilter === 'location' && styles.activeCafeFilterButton]}
            onPress={() => onChangeFilter('location')}>
                <Text  style={[styles.cafeFilterButtonText, activeFilter === 'location' && styles.activeCafeFilterButtonText]}>location</Text>
            </TouchableOpacity>
        </View>
    );

};
export default CafeFilter;