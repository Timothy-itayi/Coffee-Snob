import { StyleSheet } from 'react-native';

export default StyleSheet.create({
////////  APP.js //////

    statusBar: {
        style: 'dark', // Default style
        backgroundColor: '#000', // Default background color
    },
 
    ////// Home.js//////
   
    headerContainer: {
        backgroundColor: '#FFFDFC',
        marginVertical: 0,
        marginTop: 40,
        paddingBottom: -40,
        paddingTop: 16,
        marginHorizontal: 16,
        
    },

    headerText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '100',
       textAlign: 'left',
       fontFamily: 'SlingBold',
       letterSpacing: -1,
    },
    headerTitle: { 
       lineHeight: 80,
       margin: -70,
       marginBottom: 10,
       paddingHorizontal: 90,
       letterSpacing: -1,
       
    },
///////HOME DROPDOWN STYLING ///////////////    
    d: {
       marginLeft: -20,
       borderTopWidth: 1, 
       borderBottomWidth: 1,
       borderColor: 'grey',
       backgroundColor: '#FFFDFC',
       marginRight: -20, 
       marginTop: 16,
       marginBottom: 16,
  
    },
    modalPickerTextInput: {
        fontFamily: 'Inter-SemiBold', 
        fontSize: 20,
        marginRight: 10,
        marginLeft: 20,
    },
    
    modalPickerSelectStyle: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 16,

    },
    optionStyle: {
        marginRight: 16,
        marginLeft: 16,
        marginBottom: 20,
        marginTop: 20,
    },
    selecteditemTextStyle: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 16,
        
    },
    selectedCityMessage:{
        fontFamily: 'Inter-Medium',
        fontSize: 15,
    },
    
    itemTextStyle:{
        fontFamily: 'Inter-Medium',
        fontSize: 20,
      
       
    },
// /// ///CAFE FILTER STYLING   ////
    cafeFilterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        marginHorizontal: 40,
  
       
    },

    cafeFilterButton: {
    padding: 10 ,
    borderWidth: 1, 
    borderRadius: 20, 
    
    },
    cafeFilterButtonText: {
        fontFamily: 'Inter-SemiBold',
    },
    activeCafeFilterButtonText: {
        fontFamily: 'Inter-SemiBold',
    },
        activeCafeFilterButton: {
        backgroundColor: '#315F72',
    },
    ///// CafeCard.js Styles////// 
    cardContainer: {
        backgroundColor: '#fff',
       marginBottom: 20,
       marginTop: 0,
       zindex: 1,
       
    },
    cardImage: { 
        width: '100%',
        height: 361,
   
    },
  
    cardTitle: { 
        fontSize: 50,
       
        fontFamily: 'SlingBold',
        color: 'black',
        marginLeft: 16,
        marginTop: 20,
        marginBottom: 0,
        marginRight: 16,
    },
    cardDescription: { 
        marginTop: 10,
        marginBottom: 6,
        fontSize: 18,
        color: '#171414',
        fontFamily: 'Inter-SemiBold',
        marginLeft: 16,
        marginRight: 16,
       
        
    },
    cafeCardRating: {
        color: '#A6A2A0',
        marginTop: 2,
        fontSize: 16,
    },
    cardReviews: {
      color: '#A6A2A0',
      fontSize: 16,
    },
    cardRating: { 
      
        fontSize: 16,
        color: '#A6A2A0',
        flexDirection: 'row',
        marginLeft: 16,
        alignItems: 'center',
        marginTop: 0
    },
    cardLocation: { 
        marginTop: 5,
        fontSize: 16,
        color: '#A6A2A0',
        fontFamily: 'Inter-Regular',
        marginLeft: 16,
        width:'60%',
        flexWrap: 'wrap'
    },
 ///// CafeCard.js Styles////////// 
    
 ////////////Opening/ Closing styles ////////
    hoursContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 16,
    },
    cardOpeningHours: { 
        marginTop: 0,
        fontSize: 16,
    
        fontFamily: 'Inter-SemiBold',
       
    },
   
    space: {
        marginHorizontal: 5,
    },

    cardCloses: { 
        marginTop: 0,
        fontSize: 16,
        color: '#A6A2A0',
        fontFamily: 'Inter-Regular',
        
    },

   /// // Rating / Stars styles ////
    ratingContainer: {
        flexDirection: 'row',
        marginLeft: 16,
        alignItems: 'center',
        marginTop: 0,
       
    },
    starStyle: {
        flexDirection: 'row',
        marginLeft: 5,
        alignItems: 'center',
        marginTop: 0,
        
   
    },
 //   /// // Rating / Stars styles ////
  

    // CafeList styles 
 
 
    listContent: {
    
        paddingBottom: 200,
    },
});
