import {StyleSheet} from 'react-native'

    const colors = {
        primary_color: "#BF2EF0",
        secondary_color: "#3E34E0",
        tertiary_color: "#FFF6EA",
        quaternary_color: "#E1F7F5",
    }

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `${colors.primary_color}`,
    },
    containerRegister: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `${colors.primary_color}`,
    },
    containerListItems: {
        flex: 1,
        backgroundColor: "#FFF",
        width: "auto",
        alignItems:"center",
        padding: 12,
    },
    title: {
        color: `${colors.quaternary_color}`,
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
        height: "auto",
        gap: 10,
        padding: 10,
        width: '100%',
    },
    priceItem: {
        color: '#020',
        fontSize: 24,
        fontWeight: "800"
    },
    descriptionItem: {
        color: "#000",
        fontSize: 20
    },
    questionsComments: {
        color: "#000",
        fontSize: 18,
        fontWeight: "500"
    },
    input: {
        height: 40,
        width: 300,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        color: `${colors.quaternary_color}`,
        borderColor:`${colors.quaternary_color}`,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    inputQuestionsComments: {
        textAlignVertical: "top",
        width: "auto",
        height: 80,
        borderColor: "#000",
        color: "#000",
        borderRadius: 10,
        borderWidth: 0.8,
    },
    containerQC: {
        padding: 15,
        borderBottomWidth: 0.2
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
        borderColor:`${colors.quaternary_color}`,
        color: `${colors.quaternary_color}`,
        borderTopRightRadius: 10
    },
    iconLogin: {
        color:`${colors.quaternary_color}`
    },
    iconPassword: {
        height: 40,
        width:40,
        color: `${colors.quaternary_color}`,
        borderColor: `${colors.quaternary_color}`,
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
        backgroundColor: `${colors.quaternary_color}`,
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    generalButton: {
        backgroundColor: `${colors.tertiary_color}`,
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    searchInput: {
        height: 40,
        borderColor: "#000",
        borderWidth: 0.2,
        width: "80%",
        borderRadius: 10,
        color: "#000"
    }
    
})

export default styles;
