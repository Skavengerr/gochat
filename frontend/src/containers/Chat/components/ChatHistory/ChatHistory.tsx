import { Grid } from '@mui/material';
import React from 'react';

type Props = {
  chatHistory: string[];
};

const Message = ({ message }: { message: string }) => <p>{message}</p>;

export const ChatHistory: React.FC<Props> = ({ chatHistory }) => {
  return (
    <Grid container direction={'column'}>
      {chatHistory.map((message: string, index: number) => (
        <Message key={`${message}-${index}`} message={message} />
      ))}
    </Grid>
  );
};
