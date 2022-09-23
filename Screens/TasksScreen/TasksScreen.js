import React, { useState } from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';
import ScreenLayout from '../../components/ScreenLayout';
import styles from '../HomeScreen/HomeScreen.component.style';
import Task from '../../components/Task/Task';
import { IconButton } from 'react-native-paper';
import CreateTaskDialog from '../../components/CreateTaskDialog';

const TasksScreen = () => {
  const [taskItems, setTaskItems] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleAddTask = (text) => {
    if ( text === '' ) return false;
    Keyboard.dismiss();
    setTaskItems([...taskItems, { text, completed: false }]);
    setIsOpen(false);
  };

  const competeTask = (index) => {
    setTaskItems(prevState => prevState.map((task, idx) => idx === index
      ? { ...task, completed: !task.completed }
      : task));
  };

  const removeTask = (index) => {
    setTaskItems(prevState => prevState.filter((_, idx) => idx !== index));
  };

  const handleOpenModalAddTask = () => {
    setIsOpen(true);
  };

  return (
    <ScreenLayout>
      <View style={ styles.tasksWrapper }>
        <Text style={ styles.sectionTitle }>Today</Text>

        <FlatList style={ styles.items }
                  data={ taskItems }
                  renderItem={ ({ item, index }) => (
                    <TouchableOpacity key={ index }>
                      <Task item={ item }
                            index={ index }
                            handleRemove={ removeTask }
                            handleCompleted={ competeTask }/>
                    </TouchableOpacity>
                  ) }
                  keyExtractor={ (_, index) => index }/>
      </View>

      <KeyboardAvoidingView behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
                            style={ styles.writeTaskWrapper }>
        <TouchableOpacity>
          <IconButton icon={ 'plus-box-outline' }
                      onPress={ handleOpenModalAddTask }
                      size={ 40 }/>
        </TouchableOpacity>

      </KeyboardAvoidingView>

      <CreateTaskDialog visible={ modalIsOpen }
                        handleAddTask={ handleAddTask }/>
    </ScreenLayout>
  );
};

export default TasksScreen;
