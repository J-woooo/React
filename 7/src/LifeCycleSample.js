import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; //ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log("construcor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // props로 받아온 값을 state에 동기화
    console.log("getDerivedStateFromProps"); // 컴포넌트가 마운트/업데이트 될 때 호출
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
    // state를 변경할 필요가 있다면 색을 바꾸고 아니면 null 반환
  }

  componentDidMount() {
    // 첫 렌더링을 마치고 실행
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // props나 state를 변경했을 때, 리렌더링을 시작할지 지정
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4라면 리렌더링 하지 않는다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // render의 결과물이 브라우저에 실제로 반영되기 전 호출
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //리렌더링 완료 후 실행. prevProvs, prevState로 컴포넌트가 이전에 가졌던 데이터에 접근 가능
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      // getSnapshotBeforeUpdate에서 반환한 값이 있다면 snapshot 값 전달받을 수 있음
      console.log("업데이트되기 직전 색상: ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
