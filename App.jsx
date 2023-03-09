import * as React from 'react';

import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import StackToRender from './src/components/navigationStack';
import {useEffect, useState} from 'react';
import SplashScreen from './src/components/splashScreen';
const App = () => {
  const [timePassed, setTimePassed] = useState(false);
  useEffect(() => newFunction(), [timePassed]);

  const newFunction = () => {
    setTimeout(() => setTimePassed(true), 10);
  };

  if (!timePassed) {
    return <SplashScreen />;
  }

  return (
    <Provider store={store}>
      <StackToRender />
    </Provider>
  );
};

export default App;
