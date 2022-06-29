import { atom } from "recoil";

export const chatHistoryState = atom<string[]>({
  key: 'chatHistory',
  default: []
});
