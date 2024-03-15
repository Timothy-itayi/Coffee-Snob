import React from 'react';
import { View , Text , Image } from 'react-native';
import styles from '../AppStyles';


const CafeCard = ({ cafe }) => {
    return (
        <View style={styles.card}>
             
                <Image source={cafe.image} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{cafe.name}</Text>   
             
                <Text style={styles.cardDescription}>{cafe.description}</Text>
                <Text style={styles.cardRating}>{cafe.rating}</Text>
                <Text style={styles.cardOpeningHours}>{cafe.openingHours}</Text>
                <Text style={styles.cardLocation}>{cafe.location}</Text>
            </View>
       
    )
}



export default CafeCard;