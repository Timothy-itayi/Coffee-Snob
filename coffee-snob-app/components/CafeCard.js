import React from 'react';
import { View , Text , Image } from 'react-native';
import styles from '../AppStyles';
import { AirbnbRating } from 'react-native-ratings';


const CafeCard = ({ cafe }) => {
    return (
        <View style={styles.card}>
             
                <Image source={cafe.image} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{cafe.name}</Text>   
                <Text style={styles.cardDescription}>{cafe.description}</Text>
                <View style={styles.ratingContainer}>

                <Text>{cafe.rating}</Text>
             
                <AirbnbRating 
                count={5.0}
                defaultRating={cafe.rating}
               
                ratingContainerStyle={styles.cardRating}
              
                starContainerStyle={styles.starStyle}
                size={15}
                 fractions={2}
                isDisabled={false}
                showRating={false}/>
                   </View>
                <Text style={styles.cardLocation}>{cafe.location}</Text>
                <View style={styles.hoursContainer}>
                <Text style={[styles.cardOpeningHours, { color: cafe.openingHours === 'Open' ? 'green' : 'red'}]}>{cafe.openingHours}</Text>
                <Text style={styles.space}></Text>
                <Text style={styles.cardCloses}>{cafe.closes}</Text>
                </View>
            </View>
       
    )
}



export default CafeCard;