import React from 'react';
import { Button, Text, View } from 'react-native';
import ScreenLayout from '../../components/ScreenLayout';

const HomeScreen = ({ navigation }) => {

  return (
    <ScreenLayout>
      <View style={ { alignItems: 'center', flex: 1, justifyContent: 'center' } }>
        <View>
          <View>
            <Text style={ { fontWeight: 'bold', fontSize: 24, textAlign: 'center', marginBottom: 15 } }>
              Hello it`s my
              first React Native App
            </Text>
          </View>
          <View>
            <Button title="Go Tasks"
                    onPress={ () => navigation.push('Tasks') }/>
          </View>
        </View>

      </View>

    </ScreenLayout>
  );
};

export default HomeScreen;
