import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputE1 = useRef(null);
  // useRef를 사용하여 객체 안의 current 값이 실제 엘리먼트를 가리키게 한다.

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);
  // list 배열의 내용이 바뀔 때만 getAverage 함수 호출

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputE1.current.focus();
    },
    [number, list]
  ); //number 혹은 list가 바뀌었을 때만 함수 생성

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputE1} />
      <button onClick={onInsert}> 등록 </button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값: </b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
