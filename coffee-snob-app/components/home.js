import   React, {useState, useEffect}  from 'react';
import { Animated, Text , Button} from 'react-native';
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
      setSelectedCity(option);
      setSelectedCityMessage( `Successfully selected ${option}`);
  
  };

  const resetFilters = () => {
    setActiveFilter(null);
    setSelectedCity(null);
  }

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
        options={cafes.map((cafe) => ({value: cafe.city, id: cafe.city}))}
        selectedOption={selectedCity}
        onOptionChange={handleOptionChange}
        getSelectedItem={() => {}}
        
        />
       {selectedCity && <Text style={styles.selectedCityMessage}>{selectedCityMessage}</Text>}
       <Button title='Reset Filters' onPress={resetFilters} />
        <CafeFilter activeFilter={activeFilter} onChangeFilter={handleFilterChange} />
      </Animated.View>

      <CafeList
       cafes={cafes} selectedCity={selectedCity}activeFilter={activeFilter}  style={styles.feed}
    
      />
    </>
  )
};

export default Home;
