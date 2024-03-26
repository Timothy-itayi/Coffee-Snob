import   React , {useState} from 'react';
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
  setSelectedCity(option)
}
const formattedCities = [...new Set(cafes.map(cafe => cafe.city))];
const uniqueCities = formattedCities.map((str , index) => ({ value: str, id: index + 1}))
// console.log(uniqueCities)

const renderOption = (option) => (
  console.log(option),
  <Text style={styles.dropdownText}>{option}</Text>
)

// const filteredCafes = selectedCity ? cafes.filter(cafe => cafe.city === selectedCity) : cafes;

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
        renderOption={renderOption}
         
        />
        <CafeFilter activeFilter={activeFilter} onChangeFilter={handleFilterChange} />
      </Animated.View>

      <CafeList
       cafes={cafes}activeFilter={activeFilter}  style={styles.feed}
    
      />
    </>
  );
};

export default Home;
