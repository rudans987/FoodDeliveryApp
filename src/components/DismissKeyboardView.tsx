// 인풋 바깥을 눌렀을때 키보드가 내려가게 해주는 역할
//keyboardAvodingView쓰는 것보다 KeyboardAwareScrollView라는 라이브러리 쓰는게 보기 편함
import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
//아래 스타일타입은 외울것, 받아오는게 view면 Viewstyle, text면 TextStyle
const DismissKeyboardView: React.FC<{
  style?: StyleProp<ViewStyle>;
  children: JSX.Element[] | JSX.Element;
}> = ({children, ...props}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
