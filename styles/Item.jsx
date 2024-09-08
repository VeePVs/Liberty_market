import {StyleSheet} from 'react-native'

    const colors = {
        primary_color: "#BF2EF0",
        secondary_color: "#3E34E0",
        tertiary_color: "#FFF6EA",
        quaternary_color: "#E1F7F5",
    }

export const styles = StyleSheet.create({
    containerItem: {
        borderWidth: 0.1,
        alignItems: "center",
        flexDirection: 'row',
        height: 200,
        marginTop: 15,
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation:1,
        paddingTop:5,
        paddingLeft: 5
    },
    containerItemText: {
        width: 240,
        height: 160,
        padding: 10,
        alignItems: 'flex-start'
    },
    imgItem: {
        width:160,
        height:180,
        borderBottomRightRadius: 10,
        objectFit: 'contain'
    },
    textItem: {
        color: "#000",
        fontWeight: "500",
    },
    containerItemDetail: {
        backgroundColor: "#FFF",
        flex: 1,
        width: "auto",
        alignItems: "center",
    },
})

export default styles;
