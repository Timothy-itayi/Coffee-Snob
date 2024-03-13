import React from 'react';
import { View , Text , Image , StyleSheet} from 'react-native';


const CafeCard = ({ cafe }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{cafe.name}</Text>     
                <Image source={cafe.image} style={styles.image} />
                <View style={styles.info}>
                <Text style={styles.description}>{cafe.description}</Text>
                <Text style={styles.rating}>{cafe.rating}</Text>
                <Text style={styles.openingHours}>{cafe.openingHours}</Text>
                <Text style={styles.location}>{cafe.location}</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({

    card: {
        
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2, 
        elevation: 5,
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    info: {
        padding: 50,
    },
    title: {
      
        position: 'relative',
        fontSize: 30,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 10,
        fontSize: 14,
        color: 'gray',
    },
    rating: {
        marginTop: 5,
        fontSize: 14,
        color: 'gray',
      },
      openingHours: {
        marginTop: 5,
        fontSize: 14,
        color: 'gray',
      },
      location: {
        marginTop: 5,
        fontSize: 14,
        color: 'gray',
      },
});

export default CafeCard;