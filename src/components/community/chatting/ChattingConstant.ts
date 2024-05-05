export interface IChatting {
  roomId: string;
  roomName: string;
  host: string;
}

export interface IChattingMessage {
  content: string;
  time: string;
  memberId: string;
}

export const CHATTING_ROOM_LIST: IChatting[] = [
  { roomId: '1', roomName: '1일 1알고', host: '닉네임뭐하지' },
  { roomId: '2', roomName: '베팅 이름 2', host: '닉네임뭐하지2' },
  { roomId: '3', roomName: '베팅 이름 3', host: '닉네임뭐하지3' },
  { roomId: '4', roomName: '베팅 이름 4', host: '닉네임뭐하지4' },
  { roomId: '5', roomName: '베팅 이름 5', host: '닉네임뭐하지5' },
  { roomId: '6', roomName: '베팅 이름 6', host: '닉네임뭐하지6' },
];

export const CHATTING_MESSAGE_LIST: IChattingMessage[] = [
  { content: '안녕', time: '12:58', memberId: 'other' },
  { content: '안녕', time: '12:58', memberId: 'other' },
  { content: '안녕', time: '12:58', memberId: 'me' },
  { content: '안녕', time: '12:58', memberId: 'other' },
  { content: '안녕', time: '12:58', memberId: 'other' },
  { content: '안녕', time: '12:58', memberId: 'me' },
  { content: '안녕', time: '12:58', memberId: 'other' },
  { content: '안녕', time: '12:58', memberId: 'other' },
  { content: '안녕', time: '12:58', memberId: 'me' },
  { content: '안녕', time: '12:58', memberId: 'other' },
  { content: '안녕', time: '12:58', memberId: 'other' },
  { content: '안녕', time: '12:58', memberId: 'me' },
  { content: '안녕', time: '12:58', memberId: 'other' },
  { content: '안녕', time: '12:58', memberId: 'other' },
  { content: '안녕', time: '12:58', memberId: 'me' },
  { content: '안녕', time: '12:58', memberId: 'other' },
  { content: '안녕', time: '12:58', memberId: 'other' },
];
