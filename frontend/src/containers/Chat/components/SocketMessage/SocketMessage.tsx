import React from 'react';

import { sendMsg } from 'api/socket';

export const SocketMessage: React.FC = () => {
  const sendMessage = () => {
    sendMsg('hello');
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};
