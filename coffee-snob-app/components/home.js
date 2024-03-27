import   React, {useState, useEffect}  from 'react';
import { Animated, Text , View} from 'react-native';
import CafeList from './cafeList';
import HeaderTitle from './HeaderTitle';
import styles from '../AppStyles';
import CafeFilter from './cafeFilter';
import {cafes} from '../data/CafeData';
import { useFilter } from './filterContext';
import  CustomModalSelector from './CustomModalSelector';
 
const Home = () => { 
 const [selectedCity , setSelectedCity] = useState(null);
 const [prevSelectedCity, setPrevSelectedCity ] = useState(null);
 const [selectedCityMessage, setSelectedCityMessage] = useState(null)
 const { activeFilter , setActiveFilter } = useFilter(null);


 
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleOptionChange = (option) => {

    if (option !== prevSelectedCity){
      setSelectedCity(option);
      setSelectedCityMessage( `Successfully selected ${option}`);
    }
  };

  // Extracting unique city names from cafes
  const formattedCities = [...new Set(cafes.map(cafes => cafes.city))];

  // Mapping city names to array of objects with value and id properties
  const uniqueCities = formattedCities.map((city , index) => ({ value: city, id: index + 1}))


const getSelectedItem = (item, selected) => {
  if(item) {
    
        const itemTextStyle = selected ? [styles.modalPickerSelectStyle, {fontWeight: 'Bold'}] : styles.modalPickerSelectStyle;

    return (
      <>
     <View style={styles.itemTextContainer}>
      <Text style={styles.itemTextStyle} >{item.label}</Text>
      </View>
   
      </>
    )
  }
}


//Filter cafes based on selected city 
const filteredCafes = selectedCity ? cafes.filter(cafe => cafe.city === selectedCity) : cafes;
console.log("DropDownSelector props:",  selectedCity );
  return (
    <>
      <Animated.View
        style={styles.headerContainer}
      >
        <HeaderTitle
        >
          <Text style={styles.headerText}>Coffee Snob.</Text>
        </HeaderTitle>
     <CustomModalSelector
        options={uniqueCities}
        selectedOption={selectedCity}
        onOptionChange={handleOptionChange}
        getSelectedItem={getSelectedItem}
        
        />
       {selectedCity && <Text style={styles.selectedCityMessage}>{selectedCityMessage}</Text>}
        <CafeFilter activeFilter={activeFilter} onChangeFilter={handleFilterChange} />
      </Animated.View>

      <CafeList
       cafes={filteredCafes}activeFilter={activeFilter}  style={styles.feed}
    
      />
    </>
  )
};

export default Home;
