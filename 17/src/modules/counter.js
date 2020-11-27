import { createAction, handleActions } from 'redux-actions';

// 액션타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// 액션 생성함수 use redux-actions
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태
const initialState = {
  number: 0,
};

// 리듀서 함수 만들기
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// 리듀서 함수 use handleActions
const counter = handleActions(
  {
    [INCREASE]: (state, actions) => ({number: state.number + 1}),
    [DECREASE]: (state, actions) => ({number: state.number - 1}),
  },
  initialState,
);


export default counter;
