import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tasksWrapper: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    flexDirection: 'row',
    bottom: 10,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    // width: '100%',
  },
});

export default styles;
