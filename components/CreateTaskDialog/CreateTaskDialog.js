import React, { useState } from 'react';
import RnpDialog from '../RNPDialog';
import { TextInput } from 'react-native-paper';

const CreateTaskDialog = ({ visible, handleAddTask }) => {
  const [task, setTask] = useState('');

  const createTask = () => {
    handleAddTask(task);
    setTask('');
  };

  return (
    <RnpDialog title={ 'Create the task' }
               visible={ visible }>
      <TextInput value={ task }
                 onChangeText={ (text) => setTask(text) }
                 onSubmitEditing={ createTask }
                 placeholder={ 'Write a task' }/>
    </RnpDialog>
  );
};

export default CreateTaskDialog;
