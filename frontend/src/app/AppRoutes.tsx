import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Chat } from 'containers';

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/chat" element={<Chat />} />
  </Routes>
);
