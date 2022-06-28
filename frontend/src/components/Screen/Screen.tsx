import React from 'react';
import { Grid } from '@mui/material';

import { Header } from 'components';

export const Screen = ({ children }: { children: React.ReactNode }) => (
  <Grid container direction={'column'}>
    <Header />
    {children}
  </Grid>
);
