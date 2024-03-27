import React , {useEffect,useState} from 'react';
import { TextInput, View  } from 'react-native'; 
import ModalSelector from 'react-native-modal-selector';
import styles from '../AppStyles';

 const CustomModalSelector = ({ options , selectedOption, onOptionChange , getSelectedItem}) => {
const [value, setValue] = useState(null);

useEffect(() => {
    setValue(selectedOption);
}, [selectedOption])

const modifiedOptions = options.map(option => ({
    key: option.id,
    label: option.value,
    customItem: getSelectedItem(option, option.value === selectedOption)
}));

    return (

        <View >
            <ModalSelector 
           
            data={modifiedOptions}
            initValue='Select a city'
            onChange={(option) =>{
                setValue(option.label)
                onOptionChange(option.label);
               
            }} 

            cancelText='Cancel'
   
            optionTextStyle={{fontFamily: 'Inter-SemiBold'}}
            
            >
           <TextInput
      
           editable={false}
           value={value}
           placeholder='Select a city' 
           style={{fontFamily: 'Inter-SemiBold', fontSize: 20}}
           placeholderTextColor='black' 
          />
            </ModalSelector>
        </View>
    )
};
export default CustomModalSelector;
