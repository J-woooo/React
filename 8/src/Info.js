import React, { useState, useEffect } from "react";
import useInputs from "./useInputs";

const Info = () => {
  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
  const {name, nickname} = state;

  // useEffect(() => {
  //   //리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정
  //   // 마운트 될때만 실행하려면 두번째 파라미터로 비어있는 배열을 넣는다.
  //   // 특정 값이 업데이트 될 때만 실행하고 싶을 때는 두번째 파라미터 배열에 검사하고 싶은 값을 넣는다.
  //   // (useState를 통해 관리하는 상태나 props로 전달받은 값을 넣을 수 있음)
  //   console.log("effect");
  //   console.log(name);
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, [name]);

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  return (
    <div>
      <div>
        <input name="name" onChange={onChange} />
        <input name="nickname" onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
