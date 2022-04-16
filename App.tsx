import React, {useState} from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  Text,
  View,
  TouchableHighlight,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useCallback} from 'react';
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Barcode: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;
type BarcodeScreenProps = NativeStackScreenProps<ParamListBase, 'Barcode'>;

// 타입스크립트는 자바스크립트에 매계변수 , 리턴값 , 변수에 형식을 지정하는 것이다.

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={onClick}
          style={{padding: 20, backgroundColor: 'blue'}}>
          <Text style={{color: 'white'}}>Home Screen</Text>
        </Pressable>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: 'orange',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Text>Second Screen</Text>
      </View>
    </View>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={onClick}>
        <Text>Details Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

function BarcodeScreen({navigation}: BarcodeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={onClick}>
        <Text>Details Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [modal, showModal] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈화면'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Barcode" component={BarcodeScreen} />
      </Stack.Navigator>

      {modal && (
        <Pressable onPress={() => showModal(false)} style={styles.modal}>
          <Pressable style={styles.modalInner}>
            <View style={{flex: 5, backgroundColor: 'yellow'}}>
              <Text>모달 본문</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
              }}>
              <Pressable style={{flex: 1, alignItems: 'center'}}>
                <Text>네</Text>
              </Pressable>
              <Pressable style={{flex: 1, alignItems: 'center'}}>
                <Text>아니요</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  modalInner: {
    position: 'absolute',
    backgroundColor: 'orange',
    width: Dimensions.get('window').width - 30,
    marginHorizontal: 50,
    height: 300,
    borderRadius: 20,
    padding: 20,
    // 아이폰
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 5, height: 5},
    // 안드로이드
    elevation: 15,
  },
});

export default App;
