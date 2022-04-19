import * as React from 'react';

import {useSelector} from 'react-redux';
import Settings from './src/pages/Settings';
import Orders from './src/pages/Orders';
import Delivery from './src/pages/Delivery';
import Barcode from './src/pages/Barcode';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {RootState} from './src/store/reducer';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppInner() {
  // useSelector는 Provider 내부에서만 사용할 수 있다.
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);

  <NavigationContainer>
    {isLoggedIn ? (
      <Tab.Navigator>
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{title: '오더 목록'}}
        />
        <Tab.Screen
          name="Delivery"
          component={Delivery}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{title: '내 정보'}}
        />
        <Tab.Screen
          name="Barcode"
          component={Barcode}
          options={{title: '바코드'}}
        />
      </Tab.Navigator>
    ) : (
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{title: '로그인'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: '회원가입'}}
        />
      </Stack.Navigator>
    )}
  </NavigationContainer>;
}

export default AppInner;
