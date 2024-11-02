import {StyleSheet} from 'react-native'

    const colors = {
        primary_color: "#243E8C",
        secondary_color: "#3E34E0",
        tertiary_color: "#A1E3CA",
        quaternary_color: "#E1F7F5",
    }

export const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFF",
        alignSelf: "space-between"
    },
    paymentContainer: {
        flexDirection: "row",
        gap: 20,
        height: 100,
        backgroundColor: `${colors.primary_color}`,
        alignItems: 'center',
        justifyContent: "center"
    },
    paymentButton: {
        height: 60,
        width: 200,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#67D5B5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPaymentButton: {
        color:"#000"
    },
    textTotal: {
        color:"#000",
        fontWeight: "600",
        fontSize: 20
    },
    input: {
        backgroundColor: "#FFF",
        borderWidth: .2,
        borderColor: "#000",
        height: 40,
        margin: 30,
        width: "auto",
        color: "#000",
        borderRadius: 10
    },
    logo: {
        width:60,
        height:70
    }
})

export default styles;
