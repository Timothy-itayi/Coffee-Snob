import React from 'react';
import { View , Text , Image , StyleSheet} from 'react-native';


const CafeCard = ({ cafe }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{cafe.name}</Text>     
                <Image source={cafe.image} style={styles.image} />
                <View style={styles.info}>
                <Text style={styles.description}>{cafe.description}</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({

    card: {
        flex: 1,
        backgroundColor: '#fff',
        borderRaidus: 10,
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
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 10,
        fontSize: 14,
        color: 'gray',
    },
});

export default CafeCard;