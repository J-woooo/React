import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  // ?는 값이 선택적이라는 의미 (있을수도 있고 없을수도 있다.)
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
