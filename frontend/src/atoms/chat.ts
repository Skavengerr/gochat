import { atom } from "recoil";

export const chatHistoryState = atom<string[]>({
  key: 'chatHistory',
  default: []
});

export const chatMessageState = atom<string>({
  key: 'chatMessage',
  default: ''
})
