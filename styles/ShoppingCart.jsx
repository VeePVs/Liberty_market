import {StyleSheet} from 'react-native'

    const colors = {
        primary_color: "#243E8C",
        secondary_color: "#3E34E0",
        tertiary_color: "#A1E3CA",
        quaternary_color: "#E1F7F5",
    }

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    paymentContainer: {
        height: 100,
        width: '100%',
        backgroundColor: `${colors.primary_color}`,
        alignItems: 'center',
        justifyContent: "center"
    },
    textNoProducts: {
        color: '#000',
        alignSelf: 'center',
        fontSize: 20,
    },
    containerNoProducts: {
        height: '88%',
    },
    paymentButton: {
        height: 40,
        padding: 10,
        borderRadius: 5,
        backgroundColor: `${colors.quaternary_color}`,
    },
    textPaymentButton: {
        color:"#000"
    },
    textTotal: {
        color:"#000",
        fontWeight: "600",
        fontSize: 20
    }
})

export default styles;
