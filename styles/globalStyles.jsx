import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: '#000',
        fontsize: 5,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        color: '#222',
    },
    containerPassword: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputPassword:{
        height: 40,
        width: 260,
        margin: 0,
        borderWidth: 1,
        padding: 10,
        color: '#222',
        borderTopRightRadius: 10
    },
    icon: {
        height: 40,
        width:40,
        color: '#222',
        borderColor:'#222',
        borderBottomWidth:1,
        borderTopWidth:1,
        borderRightWidth: 1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})

export default styles;
