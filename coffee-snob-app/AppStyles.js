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

    ///// CafeCard.js Styles////// 
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
      
        fontSize: 14,
        color: 'grey',
        flexDirection: 'row',
       
        alignItems: 'center',
        marginTop: 0
    },
    cardLocation: { 
        marginTop: 5,
        fontSize: 14,
        color: 'gray',
        fontFamily: 'Sling',
    },
 ///// CafeCard.js Styles////////// 
    
 ////////////Opening/ Closing styles ////////
    hoursContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
    },
    cardOpeningHours: { 
        marginTop: 0,
        fontSize: 14,
        color: 'green',
        fontFamily: 'SlingBold',
    },
   
    space: {
        marginHorizontal: 5,
    },

    cardCloses: { 
        marginTop: 0,
        fontSize: 14,
        color: 'gray',
        fontFamily: 'Sling',
    },

   /// // Rating / Stars styles ////
    ratingContainer: {
        flexDirection: 'row',
       
        alignItems: 'center',
        marginTop: 0,
   
    },
    starStyle: {
        flexDirection: 'row',
       
        alignItems: 'center',
        marginTop: 0,
    },
 //   /// // Rating / Stars styles ////
  

    // CafeList styles 
 
 
    listContent: {
    
        paddingBottom: 200,
    },
});
