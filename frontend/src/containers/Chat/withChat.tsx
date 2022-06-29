import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { connect } from 'api/socket';
import { chatHistoryState } from 'atoms/chat';

type Props = { chatHistory: string[] };

export const withChat = (Component: React.FC<Props>) => () => {
  const [chatHistory, setChatHistory] = useRecoilState(chatHistoryState);

  useEffect(() => {
    connect((message: any) => {
      setChatHistory([...chatHistory, message.data]);
    });
  }, [chatHistory, setChatHistory]);

  const props: Props = { chatHistory };

  return <Component {...props} />;
};
