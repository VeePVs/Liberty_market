import {StyleSheet} from 'react-native'

    const colors = {
        primary_color: "#243E8C",
        secondary_color: "#3E34E0",
        tertiary_color: "#A1E3CA",
        quaternary_color: "#E1F7F5",
    }

export const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: "row",
    },
    boton: {
        height: 40,
        backgroundColor: `${colors.secondary_color}`,
        justifyContent: "center",
        alignItems: "center",
        width: 90,
        borderRadius: 18,
        marginRight: 5
    },
    botonText:{
        fontSize: 16,
        color: "#FFF"
    }
})

export default styles;
