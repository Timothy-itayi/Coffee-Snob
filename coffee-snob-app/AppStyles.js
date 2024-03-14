import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Header styles
    headerContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#A0522D',
        height: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, 
        elevation: 2,
    },
    headerTitle: { 
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold',
       textAlign: 'center',
       padding: 50,
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
        padding: 20, 
    },
    cardTitle: { 
        fontSize: 30,
        fontWeight: 'bold',
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
    cardContainer: {
        marginBottom: 15, 
    },
    listContent: {
        paddingVertical: 10, 
        paddingBottom: 200,
    },
});
