import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#2a9df4',
    },
    ofertasContainer: {
      flexDirection: 'column',
    },
    ofertaItem: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      marginBottom: 20,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    },
    ofertaImage: {
      width: 100,
      height: 100,
      borderRadius: 8,
    },
    ofertaInfo: {
      marginLeft: 16,
      flex: 1,
      justifyContent: 'center',
    },
    ofertaName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    ofertaDescription: {
      fontSize: 14,
      color: '#666',
      marginBottom: 8,
    },
    ofertaPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#27ae60',
    },
    originalPrice: {
      fontSize: 14,
      textDecorationLine: 'line-through',
      color: '#e74c3c',
    },
    discountLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#e74c3c',
      marginTop: 4,
    },
  });

  export default styles;