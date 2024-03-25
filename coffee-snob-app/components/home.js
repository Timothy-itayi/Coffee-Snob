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

// const cities = cafes.map(cafe => {
//   let locationParts = cafe.location.split(',');
//   if (locationParts.length >= 2) {
//     return locationParts[1].trim();
//   } else {
//     return Error("Location is not a string", Error);
//   }
// });
const uniqueCities = [{cafes}];


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
         onSelectOption={setSelectedCity}
        
         
        />
        <CafeFilter activeFilter={activeFilter} onChangeFilter={handleFilterChange} />
      </Animated.View>

      <CafeList
       cafes={cafes}activeFilter={activeFilter}

        style={styles.feed}
   
      />
    </>
  );
};

export default Home;
