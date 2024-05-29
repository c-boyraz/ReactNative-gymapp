import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  services: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  serviceBoxes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 250,
  },
  serviceBox: {
    width: 200,
    margin: 10,
    padding: 20,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  buyButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
  },
  buyButtonHover: {
    backgroundColor: '#ddd',
  },
  serviceText: {
    color: 'white',
  },
});

export default styles;
