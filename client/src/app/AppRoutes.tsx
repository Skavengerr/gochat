import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import { Home } from 'containers';

export const AppRoutes: React.FC = () => (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );

