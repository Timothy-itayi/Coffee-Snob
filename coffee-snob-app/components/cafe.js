import React from 'react';
import CafeCard from './CafeCard';
import { ScrollView } from 'react-native';

export const cafe = [
    {
        image: require('../assets/botanic.jpeg'),
        name: 'Botanic Brews',
        description: 'Tranquil oasis for plant lovers and coffee enthusiasts alike.',

    },
    {
        image: require('../assets/rustic.avif'),
        name: 'Barnwood Bistro',
        description: 'Charming rustic cafe nestled in the heart of the countryside.',
        
    },
    {
        image: require('../assets/white.jpeg'),
        name: 'Marble Cafe',
        description: 'Sophisticated sanctuary known for its elegant white marble aesthetic.',
        
    }
]

const CafeList = () => {
    return (
        <ScrollView>
            {cafe.map((cafeItem, index) =>
            (<CafeCard key={index} cafe={cafeItem} />))}
        </ScrollView>
    );
};

export default CafeList;