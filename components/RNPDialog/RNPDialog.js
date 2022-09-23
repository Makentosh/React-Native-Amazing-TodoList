import React from 'react';
import { Dialog, Portal } from 'react-native-paper';

const RnpDialog = ({ visible, title, children, ...props }) => {
  return (
    <Portal>
      <Dialog visible={ visible }
              onDismiss={ () => console.log('close') }>
        <Dialog.Title>{ title }</Dialog.Title>
        <Dialog.Content>
          { children }
        </Dialog.Content>
        {/*<Dialog.Actions>*/ }
        {/*  <Button onPress={ hideDialog }></Button>*/ }
        {/*</Dialog.Actions>*/ }
      </Dialog>
    </Portal>
  );
};

export default RnpDialog;
