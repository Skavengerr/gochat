import React from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { useRecoilState } from 'recoil';

import { sendMsg } from 'api/socket';
import { chatMessageState } from 'atoms/chat';

export const ChatInput: React.FC = () => {
  const [message, setMessage] = useRecoilState(chatMessageState);

  const onMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    sendMsg(message);
    setMessage('');
  };

  return (
    <Stack spacing={2} component="form" onSubmit={sendMessage} sx={{ width: '100%', mt: 1 }}>
      <TextField value={message} onChange={onMessageChange} />
      <Button variant="contained" color="secondary">
        Send Message
      </Button>
    </Stack>
  );
};
