// ScrollView는 전체다 렌더링함
// 이를 개선하기 위해 FlagList를 씀
//FlatList
// data엔 반복할 대상
// keyExtractor: 키를 넣는 props
// renderItem: 렌더할 아이템함수

import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Order} from '../slices/order';
import {RootState} from '../store/reducer';
function Orders() {
  const orders = useSelector((state: RootState) => state.order.orders);

  const renderItem = useCallback(({item}: {item: Order}) => {
    return (
      <View>
        <Text>{item.price}원</Text>
      </View>
    );
  }, []);
  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.orderId}
      renderItem={renderItem}
    />
  );
}

export default Orders;
