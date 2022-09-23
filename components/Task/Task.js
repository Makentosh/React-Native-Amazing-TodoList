import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Task.component.style';
import { Checkbox, IconButton } from 'react-native-paper';

const Task = ({ item, handleCompleted, index, handleRemove }) => {
  return (
    <View style={ styles.item }>
      <View style={ styles.itemLeft }>
        <View style={ styles.square }></View>
        <Text style={ [styles.itemText, item.completed ? styles.itemTextActive : null] }>
          { item.text }
        </Text>
      </View>
      <View style={ styles.itemRight }>
        <Checkbox status={ item.completed ? 'checked' : 'unchecked' }
                  onPress={ () => handleCompleted(index) }/>

        <TouchableOpacity>
          <IconButton onPress={ () => handleRemove(index) }
                      icon={ 'delete-outline' }/>
        </TouchableOpacity>

      </View>
    </View>
  );
};
export default Task;
