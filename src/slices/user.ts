import {createSlice} from '@reduxjs/toolkit';

// 슬라이스들이 모여서 리듀서가 되고 리듀서가 모여서 스토어가 된다.
// 스토어는 Provider로 전체에 뿌려지게 된다.
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
