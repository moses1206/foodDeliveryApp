import {createSlice} from '@reduxjs/toolkit';

// 슬라이스들이 모여서 리듀서가 되고 리듀서가 모여서 스토어가 된다.
// 스토어는 Provider로 전체에 뿌려지게 된다.
// state.user.email

// action:state를 바꾸는 행위/동작
// dispatch : 액션을 실행하는 함수
// reducer : 액션이 실행되면 state를 바꾸는 로직

const initialState = {
  name: '',
  email: '',
  accessToken: '',
  refreshToken: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
    },
  },
  extraReducers: builder => {},
});

export default userSlice;
