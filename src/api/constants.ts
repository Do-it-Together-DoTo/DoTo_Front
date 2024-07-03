export const BASE_URL = import.meta.env.VITE_APP_API_URL;

export const END_POINT = {
  MY_BETTING: `/betting`,
  BETTING: (bettingId: number) => `/betting/${bettingId}`,
  OPEN_BETTING: '/betting/open',

  MY_CHATTING: `/chatting`,
  CHATTING: (chatRoomId: number) => `/chatting/${chatRoomId}`,
  CHATTING_MESSAGE: (chatRoomId: number) => `/chatting/messages/${chatRoomId}`,
};
