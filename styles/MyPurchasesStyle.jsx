import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 16,
    },
    item: {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 12,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginRight: 16,
    },
    info: {
      flex: 1,
    },
    description: {
      fontSize: 16,
      color: '#333',
      marginBottom: 8,
    },
    status: {
      fontSize: 14,
      color: '#00796b', 
    },
  });

  export default styles;