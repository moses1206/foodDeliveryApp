import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ing from './Ing';
import Complete from './Complete';

const Stack = createNativeStackNavigator();

function Delivery() {
  return (
    <Stack.Navigator initialRouteName="Ing">
      {/* 지도가 있고 그 위에 완료처리 화면을 스택으로 구현 */}
      <Stack.Screen name="Ing" component={Ing} options={{headerShown: false}} />
      <Stack.Screen
        name="Complete"
        component={Complete}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Delivery;
