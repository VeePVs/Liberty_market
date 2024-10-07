import {StyleSheet} from 'react-native'

    const colors = {
        primary_color: "#BF2EF0",
        secondary_color: "#3E34E0",
        tertiary_color: "#FFF6EA",
        quaternary_color: "#E1F7F5",
    }

export const styles = StyleSheet.create({
    cartIcon: {
        paddingRight: 15,
        color: '#FFF'
    },
    items: {
        borderRadius:20,
        backgroundColor: '#E63946',
        width: 20,
        height:20,
        position: 'absolute',
        right: 5,
        top:-5,
        zIndex:10,
    },
    textItems: {
        textAlign: 'center',
    }
})

export default styles;
