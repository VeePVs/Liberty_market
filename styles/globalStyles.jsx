import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1E0342",
    },
    title: {
        color: '#E1F7F5',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:'#E1F7F5',
        borderRadius: 10,
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
        borderColor:'#E1F7F5',
        color: '#E1F7F5',
        borderTopRightRadius: 10
    },
    icon: {
        height: 40,
        width:40,
        color: '#E1F7F5',
        borderColor:'#E1F7F5',
        borderBottomWidth:1,
        borderTopWidth:1,
        borderRightWidth: 1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    textButton: {
        fontSize: 18,
        color: '#1E0342',
    },
    registerButton: {
        backgroundColor: '#E1F7F5',
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    generalButton: {
        backgroundColor: '#9AC8CD',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10
    }
})

export default styles;
