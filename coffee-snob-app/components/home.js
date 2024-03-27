import   React, {useState}  from 'react';
import { Animated, Text , Button, View } from 'react-native';
import CafeList from './cafeList';
import HeaderTitle from './HeaderTitle';
import styles from '../AppStyles';
import CafeFilter from './cafeFilter';
import {cafes} from '../data/CafeData';
import { useFilter } from './filterContext';
import  CustomModalSelector from './CustomModalSelector';
import CustomButton from './customButton';
const Home = () => { 
 const [selectedCity , setSelectedCity] = useState(null);
 const [selectedCityMessage, setSelectedCityMessage] = useState(null)
 const { activeFilter , setActiveFilter } = useFilter(null);


 
  const handleFilterChange = (filter) => {
    if (!selectedCity) {
      setActiveFilter(filter);
    }
   
  };

  const handleOptionChange = (option) => {
      setSelectedCity(option);
      setSelectedCityMessage( `Successfully selected ${option}`);
      setActiveFilter(null)
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
        <View style={styles.rowContainer} >
          <CustomModalSelector
                options={cafes.map((cafe) => ({value: cafe.city, id: cafe.city}))}
                selectedOption={selectedCity}
                onOptionChange={handleOptionChange}
                getSelectedItem={() => {}}
            />
            <View>
            <CustomButton 
             style={styles.resetFilterButton} title='Reset Filters' onPress={resetFilters} />
            </View>           
         </View>
         <View>
           {selectedCity && <Text style={styles.selectedCityMessage}>{selectedCityMessage}</Text>}
       
         </View>
         
       
    
      
     
        <CafeFilter activeFilter={activeFilter} onChangeFilter={handleFilterChange} disabled={!!selectedCity} />
      </Animated.View>

      <CafeList
       cafes={cafes} selectedCity={selectedCity}activeFilter={activeFilter}  style={styles.feed}
    
      />
    </>
  )
};

export default Home;
