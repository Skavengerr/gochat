import { Grid } from '@mui/material';
import React from 'react';
import { ChatHistory } from './components/ChatHistory/ChatHistory';
import { ChatInput } from './components/ChatInput/ChatInput';
import { withChat } from './withChat';

export const Chat: React.FC = withChat(({ chatHistory }) => {
  return (
    <Grid container direction={'column'} justifyContent="flex-end" sx={{ p: 2, height: 'calc(100vh - 64px)', mt: 'auto' }}>
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput />
    </Grid>
  );
});
