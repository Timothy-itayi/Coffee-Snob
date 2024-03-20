import React from 'react';
import { Text , View} from 'react-native';
import styles from '../AppStyles'


const HeaderTitle = ({  children }) => {
  return (

  <Text style={styles.headerTitle}>{children} </Text>
  );
}

export default HeaderTitle;
