import {StyleSheet} from 'react-native'

    const colors = {
        primary_color: "#BF2EF0",
        secondary_color: "#3E34E0",
        tertiary_color: "#FFF6EA",
        quaternary_color: "#E1F7F5",
    }

export const styles = StyleSheet.create({
    container: {
        borderColor: '#243E8C',
        borderWidth: 1,
        width: '70%',
        alignSelf: 'center',
        height: 60,
        opacity: 0.8,
        borderRadius: 30,
        justifyContent: 'center',
    },
    text: {
        color: '#243E8C',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18
    }
})

export default styles;
