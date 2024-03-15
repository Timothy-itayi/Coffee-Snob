import { StyleSheet } from 'react-native';

export default StyleSheet.create({

 
    // Home.js
    headerContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#A0522D',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, 
        elevation: 10,
        zIndex: 1,
    },
    headerTitle: { 
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold',
       textAlign: 'center',
     
       padding: 5,
       margin: 25,
    },

    // CafeCard.js Styles 
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2, 
        elevation: 5,
        marginBottom: 15,
    },
    cardImage: { 
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardInfo: { 
        padding: 1, 
    },
    cardTitle: { 
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'MillikRegular',
        color: 'black',
    },
    cardDescription: { 
        marginTop: 10,
        fontSize: 14,
        color: 'gray',
    },
    cardRating: { 
        marginTop: 5,
        fontSize: 14,
        color: 'gray',
    },
    cardOpeningHours: { 
        marginTop: 5,
        fontSize: 14,
        color: 'gray',
    },
    cardLocation: { 
        marginTop: 5,
        fontSize: 14,
        color: 'gray',
    },

    // CafeList styles 
   feed: {
    marginTop: -20,
    zIndex: 0,
   },
    cardContainer: {
        marginBottom: 15, 
    
        
    },
    listContent: {
        paddingVertical: 10, 
        paddingBottom: 200,
    },
});
