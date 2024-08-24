import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    categorieContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    categorieItem: {
      width: '48%',
      borderRadius: 8,
      padding: 12,
      marginBottom: 16,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    categorieImage: {
      width: 80,
      height: 80,
      borderRadius: 8,
    },
    categorieName: {
      marginTop: 8,
      fontSize: 16,
      fontWeight: 'bold',
    },
    productContainer: {
      marginTop: 16,
    },
    productItem: {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 12,
      marginBottom: 16,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    productImage: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginRight: 16,
    },
    productInfo: {
      flex: 1,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    productDescription: {
      fontSize: 14,
      color: '#666',
    },
    backButton: {
      marginBottom: 16,
      backgroundColor: '#007bff',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    backButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default styles;