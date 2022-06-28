import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Screen, Theme } from 'components';

import { AppRoutes } from './AppRoutes';

export const App: React.FC = () => (
  <RecoilRoot>
    <Router>
      <Theme>
        <Screen>
          <AppRoutes />
        </Screen>
      </Theme>
    </Router>
  </RecoilRoot>
);
