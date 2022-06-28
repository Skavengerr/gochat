import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { connect } from 'api/socket';
import { chatHistoryState } from 'atoms/chat';

type Props = { chatHistory: string[] };

export const withChat = (Component: React.FC<Props>) => () => {
  const [chatHistory, setChatHistory] = useRecoilState(chatHistoryState);
  console.log('🚀 ~ file: withChat.tsx ~ line 7 ~ withChat ~ chatHistory', chatHistory);

  useEffect(() => {
    connect((message: any) => {
      console.log('🚀 ~ file: chat.ts ~ line 10 ~ awaitconnect ~ message', message);
      setChatHistory([...chatHistory, message.data]);
    });
  }, []);

  const props: Props = { chatHistory };

  return <Component {...props} />;
};
