import { useState, useEffect } from 'react';

// Promise의 대기 중, 완료 결과, 실제 결과에 대한 상태를 관리하며
// usePromise의 의존 배열 deps를 파라미터로 받아온다.
// 파라미터로 받아온 deps 배열은 usePromise 내부에서 사용한 useEffect의 의존 배열로 설정
// 이 배열을 설정하는 부분에서 ESLint 경고가 발생한다.

export default function usePromise(promiseCreator, deps) {
  // 대기 중 완료/실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
