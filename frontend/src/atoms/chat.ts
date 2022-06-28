import { atom } from "recoil";

export const chatHistoryState = atom({
  key: 'chatHistory',
  default: ['some message']
});
