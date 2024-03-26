import React , {useState} from 'react';
import { View  } from 'react-native'; 
import {Dropdown} from 'react-native-element-dropdown';
import styles from '../AppStyles';
import { AntDesign } from '@expo/vector-icons';

const DropDownSelector = ({ options , selectedOption , onOptionChange, renderOption}) => {
 


const [value, setValue]=useState(selectedOption);
    return (
        <View>
            <Dropdown style={styles.dropdownContainer}
            data={options}
            value={value}
            onChange={item => {
                setValue(item.value);
                onOptionChange(item.value);
            }}
            placeholder='Select a city'
            renderOption={renderOption}
            renderRightIcon={() => (
                <AntDesign name="down" size={30} color='black'/>
            )}
          
            />
        </View>
    )
};

export default DropDownSelector;