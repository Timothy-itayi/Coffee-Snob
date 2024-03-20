import React, { useRef } from 'react';
import { Dimensions, Animated, Text } from 'react-native';
import CafeList from './cafeList';
import HeaderTitle from './HeaderTitle';
import styles from '../AppStyles';

const screenHeight = Dimensions.get('window').height;

const Home = () => {


 

 

 


  return (
    <>
      <Animated.View
        style={[
          styles.header,
          {  zIndex:1},
        ]}
      >
        <HeaderTitle
          style={[
            styles.headerTitle,
            {
             
              
            }
          ]}
        >
          <Text>Coffee Snob.</Text>
        </HeaderTitle>
      </Animated.View>

      <CafeList
       
        style={styles.feed}
      />
    </>
  );
};

export default Home;
