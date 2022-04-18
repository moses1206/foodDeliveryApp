import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './src/pages/Settings';
import Orders from './src/pages/Orders';
import Delivery from './src/pages/Delivery';
import Barcode from './src/pages/Barcode';
import {useState} from 'react';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';

export type LoggedInParamList = {
  Orders: undefined;
<<<<<<< HEAD
  Settings: undefined;
  Delivery: undefined;
  Barcode: undefined;
  Complete: {orderId: string};
=======
  Settings: undefined; //정산 화면
  Delivery: undefined; // 지도 화면
  Barcode: undefined;
  Complete: {orderId: string}; // 배달 완료 처리 (사진을 찍어서 보냄)
>>>>>>> 9ae9d932396387efbffcd5892388c0fa5966207e
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
<<<<<<< HEAD
  const [isLoggedIn, setLoggedIn] = useState(false);
=======
  const [isLoggedIn, setLoggedIn] = useState(true);
>>>>>>> 9ae9d932396387efbffcd5892388c0fa5966207e
  return (
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
    </NavigationContainer>
  );
}

export default App;
