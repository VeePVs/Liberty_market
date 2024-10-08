import {StyleSheet} from 'react-native'

    const colors = {
        primary_color: "#BF2EF0",
        secondary_color: "#3E34E0",
        tertiary_color: "#FFF6EA",
        quaternary_color: "#E1F7F5",
    }

export const styles = StyleSheet.create({
    containerPrices: {
        flexDirection: 'row',
        gap: 20,
    },
    totalPrice:{ 
        color: '#000',
        fontSize:18
    },
    everyPrice: {
        color: '#919191'
    },
    name: {
        color:"#000", 
        fontSize:18,
        fontWeight: "600"
    }
})

export default styles;
