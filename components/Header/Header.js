import React from 'react';
import { getHeaderTitle } from '@react-navigation/elements';
import { Appbar } from 'react-native-paper';

const Header = ({ navigation, route, options, back }) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header style={ options.headerStyle }>
      { back
        ? <Appbar.BackAction onPress={ navigation.goBack }/>
        : null }
      <Appbar.Content title={ title }/>

      <Appbar.Action icon={ 'home-outline' }
                     onPress={ () => navigation.navigate('Home') }/>
    </Appbar.Header>
  );
};

export default Header;
