import   React, {useState}  from 'react';
import { Animated, Text } from 'react-native';
import CafeList from './cafeList';
import HeaderTitle from './HeaderTitle';
import styles from '../AppStyles';
import CafeFilter from './cafeFilter';
import {cafes} from '../data/CafeData';
import { useFilter } from './filterContext';
import DropDownSelector from './DropDownSelector';
 
const Home = () => { 
 const [selectedCity , setSelectedCity] = useState(null);
  const { activeFilter , setActiveFilter } = useFilter(null);


  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleOptionChange = (option) => {
    setSelectedCity(option);
  };

  // Extracting unique city names from cafes
  const formattedCities = [...new Set(cafes.map(cafes => cafes.city))];

  // Mapping city names to array of objects with value and id properties
  const uniqueCities = formattedCities.map((city , index) => ({ value: city, id: index + 1}))


const renderItem = (item, selected) => {
  if(item) {
    console.log(item.value)
    return (
      <Text style={styles.itemTextStyle}>{item.value}</Text>
    )
  }
}


//Filter cafes based on selected city 
const filteredCafes = selectedCity ? cafes.filter(cafe => cafe.city === selectedCity) : cafes;
  return (
    <>
      <Animated.View
        style={styles.headerContainer}
      >
        <HeaderTitle
        >
          <Text style={styles.headerText}>Coffee Snob.</Text>
        </HeaderTitle>
     <DropDownSelector
        options={uniqueCities}
        selectedOption={selectedCity}
        onOptionChange={handleOptionChange}
        renderItem={renderItem}
        itemContainerStyle={styles.dropdown}
        itemTextStyle={styles.itemTextStyle}
        />
        <CafeFilter activeFilter={activeFilter} onChangeFilter={handleFilterChange} />
      </Animated.View>

      <CafeList
       cafes={filteredCafes}activeFilter={activeFilter}  style={styles.feed}
    
      />
    </>
  )
};

export default Home;
