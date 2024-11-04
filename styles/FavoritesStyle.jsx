import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#FFF',
    },
    productContainer: {
      flexDirection: 'row',
      marginBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingBottom: 8,
    },
    image: {
      width: 100,
      height: 100,
      marginRight: 16,
      borderRadius: 8,
    },
    infoContainer: {
      color: "#000",
      flex: 1,
      justifyContent: 'center',
      margin: 10
    },
    titleContainer: {
      flexDirection: 'row',
      color: "#000",
      alignItems: 'center',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      color: "#000",
      marginLeft: 8,
    },
    cartIcon: {
        marginLeft: 8,
    },
    status: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    available: {
      color: 'green',
    },
    unavailable: {
      color: 'red',
    },
    noFav: {
      color: "#000",
      alignSelf: 'center',
      fontSize: 20
    }
  });

  export default styles;