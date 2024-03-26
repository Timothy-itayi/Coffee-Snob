import React , {useState} from 'react';
import { View  } from 'react-native'; 
import {Dropdown} from 'react-native-element-dropdown';
import styles from '../AppStyles';
import { AntDesign } from '@expo/vector-icons';

const DropDownSelector = ({ options , selectedOption , onOptionChange, renderItem}) => {
 


const [value, setValue]=useState(selectedOption);

    return (
        <View   >
            <Dropdown 
          
            data={options}
            value={selectedOption}
            onChange={item => {
                setValue(item.value);
                onOptionChange(item.value);
            }}
            placeholder= 'Select a city'
            renderItem={renderItem}
            renderRightIcon={() => (
                <AntDesign name="down" size={30} color='black'/>
            )}
          
            />
        </View>
    )
};

export default DropDownSelector;