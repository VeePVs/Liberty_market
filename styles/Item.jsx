import {StyleSheet} from 'react-native'
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

    const colors = {
        primary_color: "#BF2EF0",
        secondary_color: "#3E34E0",
        tertiary_color: "#FFF6EA",
        quaternary_color: "#E1F7F5",
    }

export const styles = StyleSheet.create({
    containerItem: {
        borderWidth: 0.2,
        alignItems: "center",
        flexDirection: 'row',
        height: 200,
        shadowOpacity: 0.1,
        shadowRadius: 4,
        paddingTop:5,
        paddingLeft: 5,
        borderColor: "#a1a1a1",
        borderRightWidth:0,
        borderLeftWidth: 0
    },
    containerItemText: {
        width: 240,
        height: 160,
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    imgItem: {
        width:160,
        height:180,
        borderBottomRightRadius: 10,
        objectFit: 'contain'
    },
    nameItem: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600'
    },
    textItem: {
        color: "#000",
        fontWeight: "300",
    },
    price: {
        fontSize:14,
        color: '#a3a3a3',
        textDecorationLine: 'line-through',
    },
    containerItemDetail: {
        backgroundColor: "#FFF",
        flex: 1,
        width: "auto",
        alignItems: "center",
    },
    send: {
        color: '#06b806'
    },
    containerPrice: {
        gap: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    priceText: {
        color: '#000',
        fontSize: 22
    },
    discount: {
        color: '#06b806',
        fontSize: 16
    }
})

export default styles;
