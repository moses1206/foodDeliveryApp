<<<<<<< HEAD
import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function SignIn({navigation}: SignInScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<TextInput | null>(null); //generic
  const passwordRef = useRef<TextInput | null>(null);

  const onChangeEmail = useCallback((text: any) => {
    setEmail(text.trim());
  }, []);
  const onChangePassword = useCallback((text: any) => {
    setPassword(text.trim());
  }, []);

  const onSubmit = useCallback(() => {
    if (!email || !email.trim()) {
      return Alert.alert('알림', '이메일을 입력해 주세요!!');
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '패스워드를 입력해 주세요!!');
    }
    Alert.alert('알림', '로그인이 되었습니다. !!');
  }, []);

  const canGoNext = email && password;

  const toSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이메일을 입력해 주세요."
          value={email}
          onChangeText={onChangeEmail}
          // 삼성패스와 같은 지문인식으로 입력하기
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          // 이메일 골뱅이가 있는 키보드
          keyboardType="email-address"
          // 키보드의 엔터 아이콘 변경
          returnKeyType="next"
          // 다음키를 눌렀을때 패스워드 입력창으로 커서 이동
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          // 입력후 키보드가 내려갔다가 올라오는 것 막음
          // 계속해서 키보드 유지
          blurOnSubmit={false}
          ref={emailRef}
          // 인풋 입력할때 우측 끝에 X 자 누리면 입력내용 초기화,아이폰만 가능
          clearButtonMode="while-editing"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호을 입력해 주세요."
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry
          // 삼성패스와 같은 지문인식으로 입력하기
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          ref={passwordRef}
          // 비밀번호 입력후 엔터입력시 바로 로그인 버튼 눌림
          onSubmitEditing={onSubmit}
          clearButtonMode="while-editing"
        />
      </View>

      <View style={styles.buttonZone}>
        <Pressable
          style={
            !canGoNext
              ? styles.loginButton
              : StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
          }
          onPress={onSubmit}
          disabled={!canGoNext}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable onPress={toSignUp}>
          <Text>회원가입하기</Text>
        </Pressable>
      </View>
=======
import React from 'react';
import {View, Text} from 'react-native';

function SignIn() {
  return (
    <View>
      <Text>로그인</Text>
>>>>>>> 9ae9d932396387efbffcd5892388c0fa5966207e
    </View>
  );
}

<<<<<<< HEAD
const styles = StyleSheet.create({
  inputWrapper: {padding: 20},
  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonZone: {alignItems: 'center'},
});

=======
>>>>>>> 9ae9d932396387efbffcd5892388c0fa5966207e
export default SignIn;
