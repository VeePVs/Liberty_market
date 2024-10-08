import {StyleSheet} from 'react-native'

    const colors = {
        primary_color: "#BF2EF0",
        secondary_color: "#3E34E0",
        tertiary_color: "#050050",
        quaternary_color: "#FFFFFF",
    }

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#243E8C',
    },
    iconLogin: {
        color:`${colors.quaternary_color}`
    },
    title: {
        color: `${colors.quaternary_color}`,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
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
    generalButton: {
        backgroundColor: `${colors.tertiary_color}`,
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    textButtonRegister: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 16
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
        marginTop: 10,
        
    },
    
})

export default styles;
