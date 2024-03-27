import React , {useEffect,useState} from 'react';
import { TextInput, View  } from 'react-native'; 
import ModalSelector from 'react-native-modal-selector';
import styles from '../AppStyles';

 const CustomModalSelector = ({ options , selectedOption, onOptionChange , getSelectedItem}) => {
const [value, setValue] = useState(null);
const [showSelected, setShowSelected] = useState(false);
useEffect(() => {
    setValue(selectedOption);
}, [selectedOption])

const modifiedOptions = options.map(option => ({
    key: option.id,
    label: option.value,
    customItem: getSelectedItem(option, option.value === selectedOption)
}));

    return (

        <View  style={styles.dropdownContainer} >
            <ModalSelector 
            placeholderStyle={styles.placeholderStyle}
            data={modifiedOptions}
            initValue='Select a city'
            onChange={(option) =>{
                setValue(option.label)
                onOptionChange(option.label);
                setShowSelected(true)
            }} 
            onModalClose={() => setShowSelected(false)}
            cancelText='Cancel'
            selectStyle={styles.modalPickerSelectStyle}
            selectTextStyle={styles.modalPickerSelectStyle}
            overlayStyle={styles.modalPickerSelectStyle}
            optionStyle={styles.modalPickerOptionStyle}
            optionTextStyle={styles.modalPickerOptionTextStyle}
            >
           <TextInput
           style={styles.modalPickerTextInput}
           editable={false}
           value={value}
           placeholder='Select a city' 
      
          />
            </ModalSelector>
        </View>
    )
};
export default CustomModalSelector;
