/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import Slider from '@react-native-community/slider';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Slider
        // style={{width: 200, height: 40}}
        // minimumValue={0}
        // maximumValue={1}
        // minimumTrackTintColor="black"
        // maximumTrackTintColor="red"
        style={{flex: 1}}
        value={0.5}
        thumbTintColor={'green'}
        step={0.1}
        minimumValue={0.1}
        minimumTrackTintColor="black"
        maximumTrackTintColor="red"
      />
    </View>
  );
};

export default App;
