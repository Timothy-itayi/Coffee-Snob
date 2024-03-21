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

                <Text style={styles.cafeCardRating}>{cafe.rating}</Text>
             
                <AirbnbRating 
                type='custom'
                selectedColor= '#315F72'
                count={5}
                defaultRating={cafe.rating}
            
                starContainerStyle={styles.starStyle}
               
                
                size={15}
               
                isDisabled={true}
                showRating={false}

               />
               <Text style={styles.cardReviews}>{cafe.totalReviews}</Text>
                   </View>
                <Text style={styles.cardLocation}>{cafe.location}</Text>
                <View style={styles.hoursContainer}>
                <Text style={[styles.cardOpeningHours, { color: cafe.openingHours === 'Open' ? '#637B00' : '#AD000A'}]}>{cafe.openingHours}</Text>
                <Text style={styles.space}></Text>
                <Text style={styles.cardCloses}>{cafe.closes}</Text>
                </View>
            </View>
       
    )
}



export default CafeCard;