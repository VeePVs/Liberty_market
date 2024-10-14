import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
  },
  header: {
    backgroundColor: '#243E8C', 
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#00acc1', 
    marginBottom: 10,
  },
  changeImageButton: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  changeImageText: {
    color: '#243E8C', 
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  email: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  body: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#243E8C', 
    marginVertical: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#243E8C', 
  },
  infoValue: {
    fontSize: 16,
    color: '#004d40',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    color: '#004d40',
  },
  addCardButton: {
    backgroundColor: '#243E8C', 
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  addCardButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  settingsButton: {
    marginTop: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  settingsButtonText: {
    color: '#243E8C',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  logout: {
    alignSelf: 'center',
    backgroundColor: "#FFF",
    width: 200,
    margin: 30,
    padding:10,
    borderRadius: 10,
  },
  logoutText: {
    color: '#243E8C',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
