import { StyleSheet } from 'react-native';

export default StyleSheet.create({

 
    // Home.js
   
    header: {
        backgroundColor: '#100F0F',
        marginTop: 55,
        marginBottom: -45,
        paddingTop: 50,
     
        
        
        
    },

    headerTitle: { 
        color: '#FFFF',
        fontSize: 30,
        fontWeight: '100',
       textAlign: 'left',
       fontFamily: 'SlingBold',
       lineHeight: 80,
       margin: -70,
       marginBottom: -10,
       paddingHorizontal: 90,
       letterSpacing: -1,
  
    },

    // CafeCard.js Styles 
    card: {
        backgroundColor: '#fff',
       
      
    },
    cardImage: { 
        width: '100%',
        height: 200,
   
    },
  
    cardTitle: { 
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Sling',
        color: 'black',
    },
    cardDescription: { 
        marginTop: 10,
        fontSize: 14,
        color: 'gray',
        fontFamily: 'Sling',
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
        fontFamily: 'Sling',
    },
    cardLocation: { 
        marginTop: 5,
        fontSize: 14,
        color: 'gray',
        fontFamily: 'Sling',
    },

    // CafeList styles 
 
 
    listContent: {
    
        paddingBottom: 200,
    },
});
