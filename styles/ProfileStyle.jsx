import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0f7fa', 
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    profileCard: {
      backgroundColor: '#ffffff',
      borderRadius: 12,
      padding: 24,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      width: '90%',
      maxWidth: 400,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 4,
      borderColor: '#00acc1',
      marginBottom: 16,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#00796b', 
      marginBottom: 4,
    },
    lastName: {
      fontSize: 20,
      fontWeight: '500',
      color: '#004d40', 
      marginBottom: 16,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#00796b', 
      marginBottom: 4,
    },
    info: {
      fontSize: 16,
      color: '#004d40', 
      marginBottom: 16,
    },
  });

export default styles;