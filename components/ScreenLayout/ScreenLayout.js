import React from 'react';
import { StatusBar, View } from 'react-native';
import styles from './ScreenLayout.component.style';

const ScreenLayout = ({ children }) => {
  return (
    <View style={ styles.container }>
      <StatusBar animated={ true }
                 backgroundColor="orange"
                 barStyle={ 'default' }
                 showHideTransition={ 'slide' }
                 hidden={ false }/>

      { children }
    </View>
  );
};

export default ScreenLayout;
