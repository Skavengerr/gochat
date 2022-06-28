import { Grid } from '@mui/material';
import React from 'react';
import { ChatHistory } from './components/ChatHistory/ChatHistory';
import { SocketMessage } from './components/SocketMessage/SocketMessage';
import { withChat } from './withChat';

export const Chat: React.FC = withChat(({ chatHistory }) => {
  return (
    <Grid container sx={{ p: 2 }}>
      <ChatHistory chatHistory={chatHistory} />
      <SocketMessage />
    </Grid>
  );
});
