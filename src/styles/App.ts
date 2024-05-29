import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  gif: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  servicesContainer: {
    padding: 20,
    alignItems: 'center',
  },
  pageHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  serviceBox: {
    width: '90%',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  armBox: {
    backgroundColor: 'blue',
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  outcomeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  outcomeText: {
    marginTop: 10,
    color: '#333',
  },
  buyButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 5,
  },
  formContainer: {
    flex: 1,
    marginRight: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  orderContainer: {
    width: '100%',
    marginBottom: 20,
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableHeader: {
    fontWeight: 'bold',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  personalInfoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  paymentContainer: {
    width: '100%',
  },
  purchaseContainer: {
    padding: 20,
    alignItems: 'center',
  },
});

export default styles;
