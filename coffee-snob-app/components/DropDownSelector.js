import React from 'react';
import { View , Text } from 'react-native'; 
import {Dropdown} from 'react-native-element-dropdown';


const DropDownSelector = ({ options , selectedOption , onOptionChange}) => {
    return (
        <View>
            <Dropdown
            data={options}
            value={selectedOption}
            onChangeText={onOptionChange}
            />
        </View>
    )
};

export default DropDownSelector;