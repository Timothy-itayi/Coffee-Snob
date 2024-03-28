import   React, {useState}  from 'react';
import { Animated, Text , View } from 'react-native';
import CafeList from '../frontend-components/cafeList';
import HeaderTitle from '../frontend-components/HeaderTitle';
import styles from '../AppStyles';
import {cafes} from '../data/CafeData';
import  CustomModalSelector from '../frontend-components/CustomModalSelector';
import CustomButton from '../frontend-components/customButton';



const Home = () => { 
 const [selectedCity , setSelectedCity] = useState(null);


  const handleOptionChange = (option) => {
      setSelectedCity(option);
    
  };

  const resetFilters = () => {

    setSelectedCity(null);
  }
  // style={styles.HeaderRowContainer}
  return (
    <>
      <Animated.View
       style={styles.headerRowContainer}
      >
     
        <HeaderTitle   style={styles.headerTitleContainer}  >
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
      </Animated.View>

      <CafeList
       cafes={cafes} selectedCity={selectedCity} style={styles.feed}
    
      />
    </>
  )
};

export default Home;
