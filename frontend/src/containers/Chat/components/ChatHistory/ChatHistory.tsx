import { Grid, Stack, Chip } from '@mui/material';
import React from 'react';

type Props = {
  chatHistory: string[];
};

const Message = ({ message }: { message: string }) => (
  <Chip color="info" variant="outlined" label={message} sx={{ height: 40, color: '#444', fontWeight: 600 }} />
);

export const ChatHistory: React.FC<Props> = ({ chatHistory }) => {
  return (
    <Grid container direction={'column-reverse'}>
      <Stack spacing={1} alignItems="start">
        {chatHistory.map((message: string, index: number) => (
          <Message key={`${message}-${index}`} message={message} />
        ))}
      </Stack>
    </Grid>
  );
};
