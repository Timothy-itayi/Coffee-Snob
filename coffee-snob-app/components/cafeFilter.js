import React from 'react';
import { View , TouchableOpacity , Text } from 'react-native';
import styles from '../AppStyles';

const CafeFilter = ({ activeFilter , onChangeFilter }) => {
    return (
        <View style={styles.cafeFilterContainer} >
            <TouchableOpacity
            style={[styles.cafeFilterButton, activeFilter === 'rating' && styles.activeCafeFilterButton]}
            onPress={() => onChangeFilter('rating')}>
                <Text>Rating</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.cafeFilterButton, activeFilter === 'Open' && styles.activeCafeFilterButton]}
            onPress={() => onChangeFilter('Open')}>
                <Text>Open</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.cafeFilterButton, activeFilter === 'location' && styles.activeCafeFilterButton]}
            onPress={() => onChangeFilter('location')}>
                <Text>location</Text>
            </TouchableOpacity>
        </View>
    );

};
export default CafeFilter;