import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  // counter.number 값을 조회하여 Counter에게 props를 넘겨준다.
  const number = useSelector((state) => state.counter.number);
  // 컨테이너 컴포넌트에서 액션을 디스패치
  const dispatch = useDispatch();
  // useCallback을 사용하여 숫자가 바뀔 때(컴포넌트가 리렌더링)마다 새롭게 만들어지는 걸 최적화
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
