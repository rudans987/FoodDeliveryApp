//justifyContent: 'center' 세로 중앙 정렬
//alignItems : 'center' 가로 중앙 정렬
// 버튼 종류
// Pressable: 안드로이드와 애플 똑같이 나오게 가능
// Button,
// TouchableHighlight, TouchableOpacity,
// TouchableWithoutFeedback, TouchableNativeFeedback
// Tab.Screen 쓸때 특정 스크린 간에 공통 속성이 있을 때나 children이 하나여야 된다는 에러 날때 Tab.Group태그로 묶어야 한다.

//  Provider 바깥에서 useSelector를 못쓰기 때문에 AppInner로 따로 빼서 거기서 useSelector를 쓴다.
import * as React from 'react';
import {Provider} from 'react-redux';
import AppInner from './AppInner';
import store from './src/store';

function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}

export default App;
