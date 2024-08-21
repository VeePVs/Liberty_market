import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1E0342",
    },
    containerRegister: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
    },
    containerListItems: {
        flex: 1,
        backgroundColor: "#1E0342",
        alignItems: "center",
    },
    containerItem: {
        backgroundColor: "#0E46A3",
        flexDirection: "row",
        alignContent: "space-between",
        justifyContent: "space-between",
        borderTopStartRadius: 12,
        width: "55%",
        marginTop: 15
    },
    containerItemText: {
        width: 220,
        padding: 10
    },
    containerItemDetail: {
        backgroundColor: "#FFF",
        flex: 1,
        alignItems: "center",
    },
    title: {
        color: '#E1F7F5',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    nameItem: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        width: "100%",
        padding: 15,
        backgroundColor: "#1E0342"
    },
    detailsItems: {
        flex:1,
        padding: 20,
        width: '100%',
        backgroundColor: "#9AC8CD"
    },
    priceItem: {
        color: '#020',
        fontSize: 24,
        fontWeight: "800"
    },
    input: {
        height: 40,
        width: 300,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        color: "#E1F7F5",
        borderColor:'#E1F7F5',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    containerPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
    },
    inputPassword:{
        height: 40,
        width: 260,
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
    },
    imgItem: {
        borderBottomRightRadius: 10,
    }
})

export default styles;
