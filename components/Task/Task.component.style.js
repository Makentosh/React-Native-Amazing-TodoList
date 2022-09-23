import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55bcf6',
    opacity: 0.4,
    marginRight: 15,
    borderRadius: 5,
  },
  itemText: {
    maxWidth: '80%'
  },
  itemTextActive: {
    textDecorationLine: 'line-through'
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default styles;
