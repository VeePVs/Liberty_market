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
    categoriasContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    categoriaItem: {
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
    categoriaImage: {
      width: 80,
      height: 80,
      borderRadius: 8,
    },
    categoriaName: {
      marginTop: 8,
      fontSize: 16,
      fontWeight: 'bold',
    },
    productosContainer: {
      marginTop: 16,
    },
    productoItem: {
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
    productoImage: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginRight: 16,
    },
    productoInfo: {
      flex: 1,
    },
    productoName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    productoDescription: {
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