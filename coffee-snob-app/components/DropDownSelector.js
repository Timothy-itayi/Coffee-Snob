import React from 'react';
import { View  } from 'react-native'; 
import {Dropdown} from 'react-native-element-dropdown';
import styles from '../AppStyles';
import { AntDesign } from '@expo/vector-icons';

const DropDownSelector = ({ options , selectedOption , onOptionChange}) => {
    return (
        <View>
            <Dropdown style={styles.dropdownContainer}
            data={options}
            value={selectedOption}
            onChangeText={onOptionChange}
            placeholder={selectedOption || 'Select a city'}
            renderRightIcon={(props) => (
                <AntDesign name="down" size={30} color='black'/>
            )}
            />
        </View>
    )
};

export default DropDownSelector;