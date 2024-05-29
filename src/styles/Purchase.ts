import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  purchasePage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  orderSummary: {
    width: '45%',
  },
  paymentForm: {
    width: '45%',
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderCollapse: 'collapse',
  },
  tableRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'left',
    borderWidth: 1,
    borderColor: 'black',
  },
  label: {
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 8,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  creditCardGif: {
    width: 100,
    height: undefined,
    aspectRatio: 1,
    marginVertical: 20,
    alignSelf: 'center',
  },
  contactlessImg: {
    width: 100,
    height: undefined,
    aspectRatio: 1,
    marginVertical: 20,
    alignSelf: 'center',
  },
});

export default styles;
